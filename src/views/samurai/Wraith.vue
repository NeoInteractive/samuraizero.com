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
              <img src="../../assets/img/samurai/samurai_1_wraith.png" width="400px" alt />
            </div>
            <div class="column is-6">
              <h3>About</h3>
              <p class="body">
                <strong>Alias:</strong> Wraith
                <br />
                <strong>Real Name:</strong> Dyrus Simi
                <br />
                <strong>Spirit Partner:</strong> Chausiku (Shattered)
                <br />
                <strong>Affiliation:</strong> Simi Clan (Formerly), Silver Cloaks (Formerly)
              </p>
              <h3>HISTORY</h3>
              <p class="body">
                A young man with no currently known allies, Wraith is the only surviving member of the once-proud Simi clan, and co-founder of the mercenary group known as the Silver Cloaks.
                <br />
                <br />Not much is publicly known about Wraith, with most of the information coming from whispers on the streets of less reputable locales. While the Silver Cloaks were riding high, he served as the group’s co-leader and liaison, taking all but the most heinous of jobs.
                <br />
                <br />On the day of the New Dawn, most of the group’s members were slaughtered by the Shinigami, with Wraith himself barely escaping. Now alone, his current motives are a mystery, and sightings of him have become even rarer. It appears he is gathering information for an unknown purpose. As proof of this claim, many have noticed that he now only takes jobs that one could describe as “informative.” In particular, he seems to have taken a great interest in archaeology and world history.
                Alone, but undaunted, he proceeds with an unreadable expression, claiming that he will “set things right.”
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
                  <h1 class="title">Night Hunter</h1>
                  <p>Wraith forges situational tools which he can use to hunt his foes.</p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Skill Art</h2>
                  <h1 class="title">Fractured Cloak</h1>
                  <p>Wraith’s suit allows him to cloak, making him more difficult to see.</p>
                </div>
              </div>
              <div class="column is-4 va">
                <div>
                  <h2 class="subtitle">Heroic Art</h2>
                  <h1 class="title">Spirit Of The Night</h1>
                  <p>Wraith calls upon the Night Mother, allowing him to manipulate the ethereal energy of the night.</p>
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
