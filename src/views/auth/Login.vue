
<template>
  <section>
    <vue-headful
      title="Payment Portal Login | DENCAP Dental Plans"
      description="Online payment portal for Dencap Dental Plans members"
      keywords="insurance, dental insurance, dental, detroit, dhmo, hmo, ppo"
      lang="English"
    />
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="column is-6 is-offset-3">
            <div class="box">
              <div class="branding">
                <img src="@/assets/logos/2019-Logo-RGB-Horizontal.svg" alt="DENCAP Logo" />
              </div>
              <div class="welcome has-text-centered">
                <h1 class="title">DENCAP Payment Portal</h1>
                <h2 class="subtitle">Sign in with your Subscriber ID and Zip code</h2>
                <h2
                  class="subtitle is-6"
                >Your Subscriber ID Number is located on your bill or insurance card.</h2>
              </div>
              <form>
                <div class="field-body">
                  <div class="field">
                    <p class="label">Subscriber ID</p>
                    <div class="control">
                      <input
                        v-model.number="memberId"
                        class="input is-medium"
                        type="number"
                        placeholder="Member ID Number"
                        required
                      />
                    </div>
                  </div>

                  <div class="field">
                    <p class="label">Zip Code</p>
                    <div class="control">
                      <input
                        v-model.number="zip"
                        class="input is-medium"
                        type="number"
                        placeholder="Zip Code"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="field-body">
                  <button
                    :class="{ 'is-loading': loading }"
                    :disabled="loading"
                    class="button is-block is-primary is-medium is-fullwidth"
                    type="submit"
                    @click.prevent="signIn()"
                  >Login</button>
                </div>
              </form>
            </div>
          </div>
          <div class="help has-text-centered">
            <h3
              class="subtitle is-6"
              style="cursor: pointer"
              @click="helpModalActive = true"
            >Can't find your ID number?</h3>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <h3
          class="heading has-text-centered"
          style="color: #00024a"
        >&copy; Copyright 1984-2019 DENCAP Dental Plans</h3>
      </div>
    </section>
    <b-modal :active.sync="helpModalActive" width="650px" height="auto">
      <div class="pulse-card dark" style="height: 600px;">
        <div class="head va">
          <h1 class="title is-2">Finding Your ID Number</h1>
        </div>
        <div class="body">
          <h2 class="subtitle">On your ID card:</h2>
          <img src="../../assets/img/idcard-numcallout.png" alt />
          <br />
          <hr />
          <br />
          <h2 class="subtitle">On your monthly bill:</h2>
          <img src="../../assets/img/invoice-numcallout.png" alt />
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import { db } from '../../main'
import firebase from '@firebase/app'
import '@firebase/auth'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      memberId: 234963,
      zip: null,
      firebaseRaw: [],
      helpModalActive: false,
      loading: false,
      stripedata: null
    }
  },
  computed: {
    ...mapGetters(['userProfile', 'transaction', 'planData'])
  },
  methods: {
    signIn() {
      this.loading = true
      let memberId = this.memberId
      let memberZip = this.zip
      let fetchedData = []

      let ref = db.collection('member-data')
      let queryRef = ref
        .where('account-number', '==', memberId)
        .where('zip', '==', memberZip)

      queryRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          fetchedData.push(doc.data())
        })
        this.firebaseRaw = fetchedData[0]
        if (fetchedData.length === 1) {
          this.$store.commit('setProfile', fetchedData[0])
          this.$store.commit('isAuthed', true)
          this.$nextTick(() => this.checkIfStripeCustomer())
        } else {
          this.$snackbar.open({
            duration: 3500,
            message: `<i class="fas fa-exclamation-triangle"></i>&ensp;<strong style="color:rgba(255,255,255,.8)">No matching Member found. Please check your credentials and try again</strong>`,
            position: 'is-bottom-right',
            type: 'is-danger',
            queue: false
          })
          this.loading = false
        }
      })
    },
    helpModal() {
      this.helpModalActive = true
    },
    forgotModal() {
      this.forgotModalActive = true
    },
    closeHelpModal() {
      this.helpModalActive = false
    },
    sendResetPasswordEmail() {
      var auth = firebase.auth()
      var emailAddress = this.forgotEmail
      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function() {
          alert('email sent')
        })
        .catch(function(error) {
          alert('you did an oopsie')
        })
    },
    checkIfStripeCustomer() {
      this.loading = true
      let memberId = this.memberId.toString()
      let ref = db.collection('stripe-data').doc(memberId)
      let fetchedData
      ref.get().then(snapshot => {
        if (snapshot.exists && snapshot.data().id == '') {
          this.createStripeCustomer()
        } else {
          this.$store.commit('setStripeCustomerToken', snapshot.data().id)
          console.log('already have stripe customer data')
          setTimeout(() => this.$router.push({ path: '/portal' }), 2000)
        }
      })
    },
    createStripeCustomer() {
      let name = this.firebaseRaw.primaryContact
      let email = this.firebaseRaw.primaryEmail
      let memberId = this.firebaseRaw['account-number'].toString()

      axios
        .post(process.env.VUE_APP_STRIPE_NEW_CUSTOMER, {
          name,
          email,
          description: memberId
        })
        .then(response => {
          if (response.data.customerId !== undefined) {
            let mem = this.userProfile['account-number'].toString()

            let ref = db.collection('stripe-data').doc(mem)
            ref.update({ id: response.data.customerId })
            this.$store.commit(
              'setStripeCustomerToken',
              response.data.customerId
            )

            console.log('added to stripe-data')
            setTimeout(() => this.$router.push({ path: '/portal' }), 1000)
            this.loading = false
          } else {
            console.log('error adding stripe customer id to firebase')
            this.loading = false
          }
        })
        .catch(error => {
          console.log('error adding stripe customer id to firebase')
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pulse.scss';
.hero {
  background: rgb(247, 249, 252);
  background: radial-gradient(
    circle,
    rgba(247, 249, 252, 1) 0%,
    $light-500 100%
  ) !important;
  .hero-body {
    min-height: 100vh !important;
  }
}
.branding {
  padding-top: 2rem;
  padding-bottom: 2.5rem;
  text-align: center;
  img {
    width: 330px;
  }
}
.welcome {
  margin-bottom: 4rem;
  .title {
    font-size: 1.75rem;
  }
  .subtitle {
    color: $light-700;
    padding-top: 1rem;
  }
}
.box {
  margin-top: 5rem;
  box-shadow: $shadow-large;
  padding: 2rem;
}

input {
  font-weight: 300;
  background: white !important;
  border-color: $navy !important;
  &:focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }
}

button {
  margin-top: 2rem;
}
.field-body {
  padding-left: 1rem;
  padding-right: 1rem;
}
p {
  font-weight: 700;
  color: $text-dark !important;
  &.body {
    color: $text-dark !important;
    padding-bottom: 1rem;
  }
}
p.subtitle {
  padding-top: 1rem;
}
a {
  color: $navy;
  letter-spacing: 0.02rem;
}

@media only screen and (max-width: 600px) {
  .hero-body {
    padding: 0.15rem;
  }
  .hero-footer {
    margin-top: -2rem;
  }
  .box {
    margin-top: 0px;
    padding: 01rem;
  }
  .branding {
    padding-top: 1rem;
    padding-bottom: 1rem;
    img {
      width: 175px;
    }
  }
  .welcome {
    margin-bottom: 2rem;
    .title {
      font-size: 1.05rem;
    }
    .subtitle {
      font-size: 0.9rem;
      padding-top: 0.4rem;
    }
  }
}
.pulse-card {
  padding: 0 !important;
  margin-top: 3rem;
  border: none !important;
  height: auto !important;
  margin-bottom: 3rem;
  .head {
    background: $navy;
    color: white;
    text-align: center;
    height: 50px;
    .title {
      color: white;
      padding-top: 0px;
    }
  }
  .body {
    padding: 2rem;
    .subtitle {
      font-weight: 600;
      font-size: 1.2rem;
    }
  }
  .help {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 1rem;
    color: $text-dark;
    strong {
      color: $navy;
    }
  }
  .title {
    font-weight: 300;
    &.success-title {
      font-size: 1.7rem !important;
      color: white;
    }
  }
  .subtitle {
    padding-bottom: 0.5rem;
    padding-top: 0;
    font-weight: 300;
    font-size: 1rem;
    color: $text-dark;
  }
  .data-container {
    p {
      padding-bottom: 1.3rem;
    }
    .data {
      text-align: right;
      .data-data {
        font-weight: 600;
      }
    }
  }
}
</style>