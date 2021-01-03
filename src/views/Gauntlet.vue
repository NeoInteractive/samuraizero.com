<template>
  <div>
    <main>
      <section class="hero tutorial is-large">
        <Navbar />
        <div class="container va">
          <div class="columns is-multiline ">
            <div class="column is-10 is-offset-1 va has-text-centered">
              <br />
              <br />
              <h1 class="title">Ryder's Gauntlet</h1>
              <center><hr /></center>

              <p>
                Serving as Samurai Zero's tutorial sequence, you will be able to
                quickly get up to speed on the movement mechanics featured in
                Samurai Zero. Compete for the top spot on the leaderboard each
                season to win elite in-game rewards to show off your prowess.
              </p>
              <br />
            </div>
            <div class="column is-12 va">
              <center>
                <silentbox-single
                  src="https://youtu.be/SBFAgzznDOE"
                  description="The World of Edo - Samurai Zero"
                  :autoplay="true"
                  :hide-controls="false"
                >
                  <img
                    id="thumb"
                    src="../assets/img/ryder_trailer_thumbnail.jpg"
                    width="1000px"
                  />
                </silentbox-single>
              </center>
            </div>
          </div>
        </div>
      </section>
      <section class="hero feature is-large">
        <div class="hero-head">&nbsp;</div>
        <div class="hero-foot has-text-centered">
          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="container">
                <h1 class="title">Perfect Your Movement</h1>
                <center><hr /></center>
                <p>
                  Hone your movement skills in Ryder's personal VR training
                  simulation. The Gauntlet will test every aspect of your
                  movement as well as your ability to chain movements together.
                  An unforgiving course, the Gauntlet can be easy to complete
                  but difficult to master.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="leaderboard">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-12 has-text-centered va">
              <br /><br />
              <h1 class="title">Gauntlet Leaderboard Times</h1>
              <br />
              <h2 class="subtitle">
                Compete for the fastest time in the Gauntlet to win a Samurai
                Zero swag bag!
                <br />
                The leaderboard will update at midnight EST every day.
              </h2>
              <hr />
            </div>
            <div class="column is-8 is-offset-2">
              <div class="level leaderboard-item leaderboard-heading">
                <div class="level-left">
                  <div class="level-item medal" style="margin-right: 2.5rem">
                    <i class="fal fa-medal" style="color:#f96854"></i> &emsp;
                  </div>
                  <div class="level-item" style="margin-right: 2.5rem">
                    #
                  </div>
                  <div class="level-item">
                    Player
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    Time
                  </div>
                </div>
              </div>
            </div>
            <div
              v-for="(times, index) in leaderboard"
              :key="index"
              class="column is-8 is-offset-2"
            >
              <div class="level leaderboard-item">
                <div class="level-left">
                  <div
                    v-if="index < 3"
                    class="level-item medal"
                    :class="{
                      gold: index === 0,
                      silver: index === 1,
                      bronze: index === 2,
                    }"
                  >
                    <i class="fal fa-medal"></i>
                  </div>
                  <div v-else class="level-item medal">
                    <!-- <i class="fal fa-minus" style="color: grey"></i> -->
                  </div>
                  <div class="level-item rank">
                    {{ index + 1 }}
                  </div>
                  <div class="level-item name">
                    {{ times.name }}
                    <span
                      v-if="times.dev"
                      class="tag is-primary is-rounded"
                      style="margin-left: .5rem"
                      >DEV</span
                    >
                  </div>
                </div>
                <div class="level-right">
                  <div v-if="times.time" class="level-item time">
                    {{ times.time }}s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="patreon">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-offset-3 va has-text-centered">
              <h1 class="title">Want to get access to the movement build?</h1>
              <h2 class="subtitle">Support us on Patron today!</h2>
              <br />
              <a
                href="https://patreon.com/neointeractive"
                target="_blank"
                class="button zero-btn patreon"
                >Support us on Patreon</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ToastProgrammatic as Toast } from "buefy";
export default {
  name: "Gauntlet",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        autoplay: true,
      },
      leaderboard: [
        {
          name: "",
          time: 0,
        },
        {
          name: "",
          time: 0,
        },
        {
          name: "",
          time: 0,
        },
        {
          name: "",
          time: 0,
        },
        {
          name: "",
          time: 0,
        },
        {
          name: "",
          time: 0,
        },
        {
          name: "",
          time: 0,
        },
        {
          name: "",
          time: 0,
        },
        {
          name: "",
          time: 0,
        },
        {
          name: "",
          time: 0,
        },
      ],
    };
  },
  methods: {
    onUpdate() {
      if (this.email !== undefined) {
        Toast.open({
          duration: 1000,
          message: "Latest results have been fetched",
          type: "is-info",
          position: "is-bottom-left",
        });
      } else {
        this.$store.commit("setUpdate", this.timestamp);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
iframe {
  height: 10rem !important;
  margin: 0 !important;
}
.hero {
  background: #1a1a1b;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .title {
    color: white;
    font-size: 3rem;
  }
  .subtitle {
    color: white;
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
}
.tutorial {
  background: linear-gradient(150deg, #030101c9, #1f1f1f2c),
    url("../assets/img/hero/breach.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 10rem;
  color: ghostwhite;
  letter-spacing: 0.1rem;
  font-size: 1.4rem;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: "Kanit", sans-serif;
  font-size: 1.35rem;
  font-weight: 300;
  hr {
    max-width: 400px;
  }
  .title {
    margin-bottom: 0;
    font-family: "agency-fb-extended", sans-serif !important;
    font-size: 3rem;
    color: ghostwhite;
  }
  .subtitle {
    color: ghostwhite;
    font-family: "Kanit", sans-serif;
    font-size: 1.35rem;
    font-weight: 500;
  }
}
.feature {
  background: linear-gradient(to bottom, #030101c9, #1f1f1f00),
    url("../assets/img/hero/inner-gauntlet.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 80vh;
  hr {
    max-width: 400px;
  }
  .hero-foot {
    padding-bottom: 20rem;
    color: ghostwhite;
    letter-spacing: 0.01rem;
    font-size: 1.4rem;
    font-family: "Kanit", sans-serif;
    font-size: 1.35rem;
    font-weight: 300;
    p {
      text-shadow: rgba(0, 0, 0, 0.94) 5px 5px 8px;
      letter-spacing: 0.1rem;
    }
  }
  .title {
    margin-bottom: 0;
    font-family: "agency-fb-extended", sans-serif !important;
    font-size: 3rem;
    color: ghostwhite;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
}
.leaderboard {
  background: linear-gradient(rgba(4, 1, 1, 1) 5%, rgba(31, 31, 31, 0)),
    url("../assets/img/hero/leaderboard.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 10rem;
  padding-top: 8rem;
  color: ghostwhite;
  letter-spacing: 0.01rem;
  font-size: 1.4rem;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: "Kanit", sans-serif;
  font-size: 1.35rem;
  font-weight: 300;
  .title {
    color: white;
    font-size: 3rem;
    font-family: "agency-fb-extended", sans-serif !important;
  }
  .subtitle {
    color: ghostwhite;
    letter-spacing: 0.01rem;
    font-size: 1.4rem;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: "Kanit", sans-serif !important;
    font-size: 1.35rem !important;
    font-weight: 300;
  }
  .leaderboard-item {
    background: linear-gradient(150deg, #030101c9, #1f1f1f2c);
    border: 1px solid #ff2c3c;
    padding: 1rem;
    color: rgb(228, 228, 228);
    font-size: 1.4rem;
    font-family: "agency-fb-extended", sans-serif !important;
    &.leaderboard-heading {
      color: #f96854;
      border-color: transparent;
      border-bottom: 5px solid rgb(144, 144, 144);
    }
    .medal {
      width: 44px;
      color: gold;
      font-size: 2rem;
      &.gold {
        color: gold;
      }
      &.silver {
        color: silver;
      }
      &.bronze {
        color: #cd7f32;
      }
    }
    .rank {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .name {
      font-weight: bold;
    }
    .time {
      font-weight: 300;
      color: white;
    }
  }
}
.patreon {
  border-top: 1px solid #f96854;
  border-bottom: 1px solid #f96854;
  padding-top: 10vh;
  padding-bottom: 10vh;
  background: #0f0f0f;
  .title,
  .subtitle {
    color: ghostwhite;
  }
}
#thumb {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
</style>
