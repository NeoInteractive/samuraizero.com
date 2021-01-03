<template>
  <div class="content">
    <section class="hero is-medium">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Ryder</h1>
          <h2 class="subtitle">The Mysterious Machina</h2>
        </div>
      </div>
    </section>
    <main>
      <div class="intro">
        <div id="about" class="container">
          <div class="columns is-multiline">
            <div class="column is-6" style="text-align: right;">
              <img src="../../assets/img/samurai/samurai_2_ryder.png" width="400px" alt />
            </div>
            <div class="column is-6">
              <h3>About</h3>
              <p class="body">
                <strong>Alias:</strong> Ryder
                <br />
                <strong>Real Name:</strong> Hiro Kashikoi
                <br />
                <strong>Spirit Partner:</strong> Toshihiro
                <br />
                <strong>Affiliation:</strong> Kashikoi Clan
              </p>
              <h3>HISTORY</h3>
              <p class="body">
                A mysterious entity in the world of Edo, Ryder moves like a bolt of lightning from province to province, city to city, attending to an agenda only he knows.
                <br />
                <br />The figure Ryder appeared relatively quickly after the New Dawn, as if heralding the Great Leap Forward for the rest of the world. His body appears to be covered in metal from head to toe, replacing muscle and sinew with steel and wire.
                <br />
                <br />He does not interact with common people very often, and most people find his words often incomprehensible, almost altering between a scholar and a knight. Yet despite this, many are not exactly sure what he is. He appears to be a machina, a lifeless doll made from steel, but his words and actions feel too emotive to be lifeless. Yet he cannot simply be a man in a suit of armor, as certain details like his neck and head size seem to preclude this.
                <br />
                <br />Among the whispers about him, many see him leaving the area of land belonging to the prestigious Kashikoi Clan. However even if he is a product of theirs, he does not seem to act in their interest, unconcerned with their affairs.
                <br />
                <br />Currently he seems fascinated with Edo’s scattered Samurai, Wraith in particular, and seeks them out to learn what he can from them. Whether this knowledge is for some noble purpose, nefarious ends, or simply for its own sake, the machina lets nothing be certain.
              </p>
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
                  <p>Ryder moves so fast that he send out afterimages of himself to damage enemies.</p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Skill Art</h2>
                  <h1 class="title">Speed Shift</h1>
                  <p>Ryder overwhelms his opponent with a speedy chain of strikes, ending with various forms of crowd control to delay their counter attack.</p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Heroic Art</h2>
                  <h1 class="title">Stellar Conclusion</h1>
                  <p>Ryder pushes his speed to its absolute limit, annihilating his target(s) before they have a chance to percieve him.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="this-is">
          <div class="video-wrapper">
            <div class="container">
              <video width="100%" controls poster="../../assets/img/ryder/thisis.jpg">
                <source :src="thisIs" type="video/mp4" />Your browser does not support the video tag.
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
    Newsletter
  },
  data() {
    return {
      thisIs: "https://szero.b-cdn.net/this-is/Ryder.mp4"
    };
  }
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
  .body {
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
