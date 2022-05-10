<template>
  <div class="content">
    <section class="hero is-medium">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Luna</h1>
          <h2 class="subtitle">The Radiant Joy</h2>
        </div>
      </div>
    </section>
    <main>
      <div class="intro">
        <div id="about" class="container">
          <div class="columns is-multiline">
            <div class="column is-6" style="text-align: right;">
              <img
                src="../../assets/img/samurai/samurai_3_luna_new.png"
                width="400px"
                alt
              />
            </div>
            <div class="column is-6">
              <h3>About</h3>
              <p class="body">
                <strong>Age:</strong> 21
                <br />
                <strong>Alias:</strong> Luna
                <br />
                <strong>Real Name:</strong> Luna Alcmene
                <br />
                <strong>Spirit Partner:</strong> Leporin

                <br />
                <strong>Affiliation:</strong> Alcmene Clan
              </p>
              <br /><br />
              <q>
                Even in the darkness of night, the moon is always shining.
              </q>
              <h3>HISTORY</h3>
              <p class="body">
                Luna is the inexperienced but earnest head of the illustrious
                Alcmene Clan. Despite the troubles that plague her, she is a
                firm believer that things will improve so long as she keeps hope
                alive. To her, if a leader can assure their people with a smile,
                then they can inspire them to be better. <br /><br />
                Born the second child of the former Alcmene Head, Luna was never
                expected to lead, yet she did not harbor resentment of this
                fact. On the contrary, she was excited to have her older brother
                lead their clan into a bright future. But on the night he was
                supposed to rise to the occasion, disaster struck, and Luna's
                brother was possessed by a Demon, maiming his sister before
                escaping into the night. <br /><br />
                Now suddenly thrusting into a role she never thought she would
                have, Luna does her best to lead her clan into the bright future
                she idealizes. However she never loses hope that someday she'll
                find and save her beloved brother from his terrible fate, and
                she can give him back the leadership she is forced to contend
                with. <br /><br />
                During a conflict, Luna functions as a close to mid-range
                support, providing healing to her teammates while also dealing
                respectable damage. In the right hands, Luna can turn the tide
                of a fight, grasping a sudden victory from the jowls of defeat.
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
                  <h1 class="title">Moonlight</h1>
                  <p>
                    Luna fires luminous projectiles to either debilitate her
                    opponents or heal her allies.
                  </p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Skill Art</h2>
                  <h1 class="title">Lunar Rift</h1>
                  <p>
                    Luna creates an area filled with light that can potentially
                    damage enemies and heal allies.
                  </p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Heroic Art</h2>
                  <h1 class="title">Lunar Eclipse</h1>
                  <p>
                    Luna calls upon the full power of the moon to either greatly
                    enhance her attacks or cover a large area of the battlefield
                    in radiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Newsletter />
    <CTApatreon />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Newsletter from "@/components/Newsletter.vue";
import CTApatreon from "@/components/CTApatreon.vue";
export default {
  name: "Wraith",
  components: {
    Navbar,
    Footer,
    Newsletter,
    CTApatreon,
  },
  data() {
    return {};
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
    url("../../assets/img/luna/luna.jpg") !important;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  .hero-body {
    .title {
      font-family: "Space Grotesk", sans-serif !important;
      color: #e9e2ca;
      font-size: 3rem;
    }
    .subtitle {
      font-family: "Space Grotesk", sans-serif !important;
      color: #e9e2ca;
      font-style: italic;
      font-weight: 400;
    }
  }
}

.intro {
  background: linear-gradient(150deg, #030101, #1b1b1b);
  padding-top: 10rem;
}
#about {
  font-family: "Space Grotesk", sans-serif;
  padding-bottom: 10rem;
  h3 {
    color: #e9e2ca;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 0.1rem;
  }
  .body,
  q {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.3rem;
    color: #faf7eb;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    strong {
      color: #ff2c3c;
      text-transform: uppercase;
    }
  }
}
#arts {
  background: radial-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.472) 51.1%,
      #000000 99.74%
    ),
    url(../../assets/dunes-night.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 5rem;
  padding-bottom: 5rem;
  font-family: "Space Grotesk", sans-serif;
  .title {
    color: #e9e2ca;
  }
  .subtitle {
    color: #ff2c3c;
    font-weight: 400;
  }
  p {
    font-family: "Space Grotesk", sans-serif;
    color: #faf7eb;
    font-size: 1.3rem;
  }
}
#this-is {
  height: 756px;
  background: #030101;
}
// Mobile styles
@media only screen and (max-width: 450px) {
  #about {
    padding: 1rem;
  }
}
</style>
