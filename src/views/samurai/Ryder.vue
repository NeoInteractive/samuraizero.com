<template>
  <div class="content">
    <section class="hero is-medium">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Ryder</h1>
          <h2 class="subtitle">The Curious Machina</h2>
        </div>
      </div>
    </section>
    <main>
      <div class="intro">
        <div id="about" class="container">
          <div class="columns is-multiline">
            <div class="column is-6" style="text-align: right;">
              <img
                src="../../assets/img/samurai/samurai_2_ryder_new.png"
                width="400px"
                alt
              />
            </div>
            <div class="column is-6">
              <h3>About</h3>
              <p class="body">
                <strong>Age:</strong> [UNKNOWN]
                <br />
                <strong>Alias:</strong> Ryder
                <br />
                <strong>Real Name:</strong> [UNKNOWN]
                <br />
                <strong>Spirit Partner:</strong> [UNKNOWN]
                <br />
                <strong>Affiliation:</strong> Kashikoi Clan (speculated)
              </p>
              <br /><br />
              <q>
                My work will be done when the fox finally sleeps.
              </q>
              <h3>HISTORY</h3>
              <section>
                <p class="body">
                  Ryder is an automaton largely theorized to be affiliated with
                  the Kashikoi Clan in some shape or form. Little is known about
                  Ryder at the moment. Where he comes from or what he wants are
                  a mystery to all but a select few. While he moves with the
                  fluidity and natural motion of a human, he is most assuredly a
                  machine.
                </p>
                <details>
                  <summary style="color: #ff2c3c">Read More</summary>
                  <p class="body">
                    From what can be gleamed, Ryder appears to take great
                    interest in strong samurai, but does not seem to seek their
                    elimination. Rather, he only wishes to test his skills
                    against them.
                  </p>
                  <p class="body">
                    Most notably, Ryder seems particularly fixated with the
                    equally mysterious samurai Wraith, and pursues him the most
                    doggedly. This apparently rivalry is largely one-sided, as
                    Wraith does not share an equal fascination with the machina
                    beyond the usual questions everyone has about him.
                  </p>
                  <p class="body">
                    The technology that composes Ryder is the most advanced in
                    all of Edo, but snippets of things he says somewhat imply
                    that he is not altogether sentient, and that there may be
                    someone puppeting the machine. If there are people privy to
                    this knowledge, they do not share.
                  </p>
                  <p class="body">
                    With lightning-fast movements and deft strikes with his
                    blade, he is a peerless duelist. While he might lack in
                    crowd control to help set up combos for his teammates, he
                    more than makes up for it in raw damage, allowing him to
                    have some of the highest damage-dealing potential of any
                    samurai. While in a fight, Ryder excels at eliminating
                    threats before they become too much of an issue, as his
                    relative fragility causes him to struggle in drawn-out
                    fights.
                  </p>
                </details>
                <br /><br />
              </section>
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
                  <h1 class="title">Flash Step</h1>
                  <p>
                    Ryder moves so fast that he send out afterimages of himself
                    to damage enemies.
                  </p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Skill Art</h2>
                  <h1 class="title">Speed Shift</h1>
                  <p>
                    Ryder overwhelms his opponent with a speedy chain of
                    strikes, ending with various forms of crowd control to delay
                    their counter attack.
                  </p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Heroic Art</h2>
                  <h1 class="title">Stellar Conclusion</h1>
                  <p>
                    Ryder pushes his speed to its absolute limit, annihilating
                    his target(s) before they have a chance to percieve him.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="this-is">
          <div class="video-wrapper">
            <div class="container">
              <video
                width="100%"
                controls
                poster="../../assets/img/ryder/thisis.jpg"
              >
                <source :src="thisIs" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
    url("../../assets/img/ryder/ryder.jpg") !important;
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
    letter-spacing: 0.05rem;
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
video {
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #e9e2ca;
}
// Mobile styles
@media only screen and (max-width: 450px) {
  #about {
    padding: 1rem;
  }
}
</style>
