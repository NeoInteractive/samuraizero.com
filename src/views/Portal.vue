<template>
  <div class="portal grid-layout">
    <vue-headful
      title="Payment Portal | Dencap Dental Plans"
      description="Online payment portal for Dencap Dental Plans members"
      keywords="insurance, dental insurance, dental, detroit, dhmo, hmo, ppo"
      lang="English"
    />
    <div class="subgrid">
      <div class="sidenav">
        <div class="branding">
          <img src="@/assets/logos/2019-Logo-RGB-Horizontal.svg" alt="DENCAP Logo" />
        </div>
        <div class="stepper">
          <div class="step" :class="checkStepOne">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="content" @click="changeActiveStep(1)">1. Verify your Information</div>
          </div>
          <div class="step" :class="checkStepTwo">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="content" @click="changeActiveStep(2)">2. Payment Details</div>
          </div>
          <div class="step" :class="checkStepThree">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="content" @click="changeActiveStep(3)">3. Confirmation</div>
          </div>
          <div v-if="error" class="step" :class="checkStepThreePointOne">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div class="content">3.1 Error</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="questions">
          <i class="fad fa-question-square fa-swap-opacity"></i> Questions? Call us at (313) 972-1400
        </p>
        <button class="button is-text">Terms of Use</button>
        <button class="button is-text">Privacy Policy</button>
        <p class="copyright">Copyright © 2019 DENCAP Dental Plans</p>
      </div>
    </div>
    <div class="content m-bump">
      <VerifyInformation v-if="currentStep == 1" />
      <PaymentDetails v-if="currentStep == 2" />
      <Confirmation v-if="currentStep == 3" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VerifyInformation from '@/components/VerifyInformation'
import PaymentDetails from '@/components/PaymentDetails'
import Confirmation from '@/components/Confirmation'
export default {
  name: 'Portal',
  components: {
    VerifyInformation,
    PaymentDetails,
    Confirmation
  },
  data() {
    return {
      error: false
    }
  },
  computed: {
    ...mapGetters(['isAuthed', 'userProfile', 'currentStep']),
    checkStepOne: function() {
      return {
        active: this.currentStep == 1,
        completed: this.currentStep >= 2
      }
    },
    checkStepTwo: function() {
      return {
        active: this.currentStep == 2,
        completed: this.currentStep == 3
      }
    },
    checkStepThree: function() {
      return {
        completed: this.currentStep == 3
      }
    }
  },
  methods: {
    changeActiveStep(number) {
      this.$store.commit('setCurrentStep', number)
    },
    logout() {
      this.$store.commit('isAuthed', false)
      this.$store.commit('resetState')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pulse.scss';
.portal {
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
}
.logout {
  float: right;
  margin: 2rem;
}
.grid-layout {
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 100vh;
}
.subgrid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 125px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .sidenav {
    background: white;
    padding: 5rem;
    height: 100%;
    .branding {
      padding-bottom: 5rem;
      img {
        width: 330px;
      }
    }
  }

  .step {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: cream;
    .content {
      font-size: 1.4rem;
      cursor: pointer;
    }
    .circle {
      background-color: white;
      border: 3px solid $light-600;
      border-radius: 100%;
      width: 21px; /* +6 for border */
      height: 21px;
      display: inline-block;
      margin-left: 3px;
      margin-top: 7px;
    }
    .line {
      top: 23px;
      margin-top: 5px;
      left: 12px;
      height: 100%;
      position: absolute;
      border-left: 3px solid $light-400;
    }
    &.completed {
      .content {
        color: $navy;
      }
    }
    &.active {
      .content {
        font-weight: 600;
        color: $navy;
      }
    }
  }
  .bottom {
    color: $navy;
    background: white;
    text-align: center;
    height: auto;
    .questions {
      font-weight: 600;
      padding-bottom: 0.5rem;
    }
    .copyright {
      color: $light-600;
      font-size: 0.9rem;
    }
    button {
      text-decoration: none;
      font-weight: bold;
      color: $navy;
      font-size: 0.85rem;
    }
  }

  .v-stepper {
    position: relative;
  }

  .step.completed .circle {
    visibility: visible;
    background-color: $navy;
    border-color: $navy;
  }

  .step.completed .line {
    border-left: 3px solid $navy;
  }

  .step.active .circle {
    visibility: visible;
    border-color: $navy;
  }

  .step.empty .circle {
    visibility: hidden;
  }

  .step.empty .line {
    /*     visibility: hidden; */
    /*   height: 150%; */
    top: 0;
    height: 150%;
  }

  .step:last-child .line {
    border-left: 3px solid white;
    z-index: -1; /* behind the circle to completely hide */
  }

  .content {
    margin-left: 20px;
    padding-bottom: 5rem;
    display: inline-block;
  }
}

.main {
  padding-top: 6rem;
  overflow: scroll;
  overflow-y: scroll !important;
  .title {
    color: $text-dark;
  }
  .subtitle {
    color: $light-700;
    font-weight: 400;
    font-size: 1.1rem;
    padding-top: 1rem;
  }
  .pulse-card {
    margin-top: 3rem;
    padding: 2rem;
    border: none !important;
    height: auto !important;
    margin-bottom: 3rem;
    .help {
      padding-left: 3rem;
      padding-right: 3rem;
      padding-top: 1rem;
      color: $text-dark;
      strong {
        color: $navy;
      }
    }
    .subtitle {
      border-bottom: 2px solid $navy;
      padding-bottom: 0.5rem;
      padding-top: 0;
      font-weight: 600;
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
}

@media only screen and (max-width: 600px) {
  .grid-layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    min-height: 100vh;
  }
  .subgrid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    .sidenav {
      background: white;
      padding: 1rem;
      z-index: 99999;
      .branding {
        text-align: center;
        padding-bottom: 2rem;
        img {
          width: 190px;
        }
      }
    }
    .step {
      padding: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      background-color: white;
      .content {
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
    .bottom {
      display: none;
    }
    .content {
      padding-bottom: 1rem;
      display: inline-block;
    }
    .logout {
      display: none !important;
    }
  }
  .m-bump {
    height: 1250px !important;
  }
}
</style>


