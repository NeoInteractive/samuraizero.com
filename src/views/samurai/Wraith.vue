<template>
  <div class="content">
    <section class="hero is-medium">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Wraith</h1>
          <h2 class="subtitle">The Fading Shadow</h2>
        </div>
      </div>
    </section>
    <main>
      <div class="intro">
        <div id="about" class="container">
          <div class="columns is-multiline">
            <div class="column is-6" style="text-align: right;">
              <img
                src="../../assets/img/samurai/samurai_1_wraith.png"
                width="400px"
                alt
              />
            </div>
            <div class="column is-6">
              <h3>About</h3>
              <p class="body">
                <strong>Age:</strong> 29
                <br />
                <strong>Alias:</strong> Wraith
                <br />
                <strong>Real Name:</strong> Dyrus Simi
                <br />
                <strong>Spirit Partner:</strong> Chausiku (Shattered)
                <br />
                <strong>Affiliation:</strong> Unaffiliated; Simi Clan
                (Formerly), Silver Cloaks (Formerly)
              </p>
              <br /><br />
              <q>
                Maybe a leopard can't change its spots...but it can hide them.
              </q>
              <h3>HISTORY</h3>
              <p class="body">
                Wraith is an ex-mercenary forged by both ancestral teachings
                passed down to him and through withstanding a lifetime of
                tragedy. The final survivor of the once proud Simi Clan, Dyrus
                watched the mountains he called home burn to the ground by
                Meridian forces when he was only a boy. However at Chausiku's
                insistence, the orphaned boy decided to forsake revenge and
                focus only on surviving so that he might carry the Simi legacy.
                In time, Dyrus found a new family in the Silver Cloaks, a
                mercenary group he co-founded with his friend Ren. The group
                would undertake several different kinds of jobs, from
                reconnaissance to guard duty, and even wetwork operations for
                those that truly deserved it. Yet even this family would be
                ripped away from him, as they were slain by the Shinigami during
                the New Dawn, including the shattering of his Chausiku.
                <br /><br />
                Now without a family once again, and this time without even a
                Spirit to guide him, Dyrus spends all his efforts gathering
                information for an unknown purpose. He denies that what he seeks
                is revenge, only commenting that "it's not what they would
                want." The true goal of this samurai remains in the shadows.
                <br /><br />
                Specializing in speed and precision, he prefers to handle tasks
                as quickly an efficiently as possible. While he has no qualms
                with killing, he detests needless violence, so when he goes for
                the throat, you can be assured that there was no other choice.
                In battle, Wraith is most lethal at identifying and isolating
                high-priority targets and ending them quickly, before
                disappearing just as fast.
              </p>
            </div>
            <div class="column is-12 has-text-centered">
              <br /><br /><br /><br />
              <button
                @click="$router.go(-1)"
                class="button zero-btn white outlined"
              >
                Back to All Samurai
              </button>
            </div>
          </div>
        </div>
        <div id="arts" class>
          <div class="container">
            <div class="columns has-text-centered">
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Skill Art</h2>
                  <h1 class="title">Night Hunter</h1>
                  <p>
                    Wraith forges situational tools which he can use to hunt his
                    foes.
                  </p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Skill Art</h2>
                  <h1 class="title">Fractured Cloak</h1>
                  <p>
                    Wraith’s suit allows him to cloak, making him more difficult
                    to see.
                  </p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Heroic Art</h2>
                  <h1 class="title">Spirit Of The Night</h1>
                  <p>
                    Wraith calls upon the Night Mother, allowing him to
                    manipulate the ethereal energy of the night.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Newsletter />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Newsletter from "@/components/Newsletter.vue";
export default {
  name: "Wraith",
  components: {
    Navbar,
    Footer,
    Newsletter,
  },
  data() {
    return {
      thisIs: "https://szero.b-cdn.net/this-is/Ryder.mp4",
    };
  },
};
</script>
<style lang="scss" scoped>
.va {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero {
  background-image: linear-gradient(150deg, #030101d3, #1f1f1fda),
    url("../../assets/img/wraith/wraith.jpg") !important;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  .title {
    color: white;
    font-size: 3rem;
  }
  .subtitle {
    color: rgb(231, 231, 231);
    font-style: italic;
    font-weight: 400;
  }
}

.intro {
  background: linear-gradient(150deg, #030101, #1b1b1b);
  padding-top: 10rem;
}
#about {
  padding-bottom: 10rem;
  h3 {
    color: #ff2c3c;
    text-transform: uppercase;
  }
  .body,
  q {
    font-family: hypatia-sans-pro, sans-serif;
    font-size: 1.3rem;
    color: rgb(240, 240, 240);
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    strong {
      color: white;
    }
  }
}
#arts {
  background: #1b1b1b;
  padding-top: 5rem;
  padding-bottom: 5rem;
  .title {
    color: white;
  }
  .subtitle {
    color: #ff2c3c;
  }
  p {
    font-family: hypatia-sans-pro, sans-serif;
    color: white;
    font-size: 1.3rem;
  }
}
#this-is {
  height: 756px;
  background: #030101;
}
</style>
