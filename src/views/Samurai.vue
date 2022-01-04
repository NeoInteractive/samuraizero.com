<template>
  <div class="content">
    <section class="hero">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Age of the Samurai</h1>
          <h2 class="subtitle">View the Samurai of Samurai Zero</h2>
        </div>
      </div>
    </section>
    <main>
      <div class="samurai">
        <div class="container">
          <div class="lineup columns is-multiline">
            <div class="column profile is-4 has-text-centered">
              <div class="wraith"></div>
              <nav class="level">
                <div class="level-left">
                  <div class="level-item">
                    <h1 class="title">Wraith</h1>
                  </div>
                </div>
                <div class="level-right">
                  <p class="level-item">
                    <router-link to="/samurai/wraith" class="button zero-btn"
                      >View Samurai</router-link
                    >
                  </p>
                </div>
              </nav>
            </div>
            <div class="column profile is-4 has-text-centered">
              <div class="ryder"></div>
              <nav class="level">
                <div class="level-left">
                  <div class="level-item">
                    <h1 class="title">Ryder</h1>
                  </div>
                </div>
                <div class="level-right">
                  <p class="level-item">
                    <router-link :to="{ name: 'Ryder' }" class="button zero-btn"
                      >View Samurai</router-link
                    >
                  </p>
                </div>
              </nav>
            </div>
            <div class="column profile is-4 has-text-centered">
              <div class="luna"></div>
              <nav class="level">
                <div class="level-left">
                  <div class="level-item">
                    <h1 class="title">Luna</h1>
                  </div>
                </div>
                <div class="level-right">
                  <p class="level-item">
                    <router-link :to="{ name: 'Luna' }" class="button zero-btn">
                      View Samurai
                    </router-link>
                  </p>
                </div>
              </nav>
            </div>
            <div class="column profile is-12 has-text-centered va">
              <p class="">
                <br />
                More will be revealed soon as we continue development
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="intro">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-12">
              <h3 class="jp-subheading has-text-centered">武士道</h3>
              <h1 class="title">Way of the Samurai</h1>
              <h3 class="body">
                In Samurai Zero, the Samurai are powerful warriors capable of
                reshaping the future with their own two hands. Without the gods,
                they are the last great power left to the world and its
                denizens. Through their might or wit, they may either save Edo
                or deal the finishing blow, sending it all into chaos.
                <br />
                <br />The key to a Samurai’s power is their bond with their
                spirit-animal partner. A symbiotic union, the human and
                non-human pair enter into a contractual agreement that empowers
                one another. To the human, supernatural abilities are attained,
                elevating them far beyond what a normal mortal is capable of. To
                the spirit, their gains are far more diverse, dependent on their
                individual ambitions. Some spirits bond emotionally with a
                single individual, while other spirits are tied to a clan’s
                family tree, with the power being passed down from one
                generation to the next.
                <br />
                <br />The powers gained by the human can vary wildly and are
                often dependent on the abilities of the spirit in question,
                ranging from faster reflexes to bending and shaping the elements
                themselves. Through combining these powers with combat and
                weapon training, Samurai are on a completely different level
                than that of normal combatants. While each Samurai pursues a
                personalized agenda, the chaotic nature of the godless world has
                eliminated their desire for isolation. With goals and grudges
                setting them on their respective paths, the Samurai are destined
                for a collision course with each other, and the world may return
                to zero.
              </h3>
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
  name: "Thankyou",
  components: {
    Navbar,
    Footer,
    Newsletter,
    CTApatreon,
  },
};
</script>
<style lang="scss" scoped>
$shadow-large: 0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1);
.hero {
  background: radial-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.472) 51.1%,
      #000000 99.74%
    ),
    url(../assets/dunes-night.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Space Grotesk", sans-serif !important;
  .title {
    font-family: "Space Grotesk", sans-serif !important;
    font-weight: 700;
    font-size: 3rem;
    color: #e9e2ca;
  }
  .subtitle {
    color: #ff2c3c;
    font-weight: 400;
  }
}
.intro {
  background: radial-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.472) 51.1%,
      #000000 99.74%
    ),
    url(../assets/dunes-night.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 10rem;
  font-family: "Space Grotesk", sans-serif !important;
  .body {
    color: #faf7eb;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
  }
  .title {
    font-family: "Space Grotesk", sans-serif !important;
    color: #e9e2ca;
    font-size: 3rem;
    text-align: center;
  }
}
.samurai {
  font-family: "Space Grotesk", sans-serif !important;
  background: #030101;
  padding-top: 10rem;
  padding-bottom: 10rem;
  .title {
    font-family: "Space Grotesk", sans-serif;
    font-size: 3rem;
    color: #faf7eb;
    span {
      color: #ff2c3c;
    }
  }
  p {
    font-size: 1.5rem;
    color: #faf7eb;
    font-family: "Space Grotesk", sans-serif;
  }
  .profile {
    transition: all 0.1s ease;
    &:hover {
      margin-top: -3px;
      .wraith {
        background: url("../assets/img/samurai/samurai_1_wraith.png"),
          linear-gradient(rgba(53, 117, 47, 0.459), rgb(53, 117, 47));
        height: 600px;
        background-size: cover;
        background-position: top;
      }
      .ryder {
        background: url("../assets/img/samurai/samurai_2_ryder.png"),
          linear-gradient(rgba(47, 97, 117, 0.459), rgb(47, 83, 117));
        height: 600px;
        background-size: cover;
        background-position: top;
      }
      .luna {
        background: url("../assets/img/samurai/samurai_3_luna.png"),
          linear-gradient(rgba(105, 47, 117, 0.459), rgb(95, 47, 117));
        height: 600px;
        background-size: cover;
        background-position: top;
        transition: all 0.6s ease;
      }
    }
    .level {
      color: #faf7eb;
      margin-top: 0;
      background: #000000da;
      border: 1px solid rgba(233, 226, 202, 0.4);
      border-top: transparent;
      padding: 1rem;
      border-bottom-right-radius: 25px;
      .zero-btn {
        border-bottom-right-radius: 15px;
      }
      .title {
        font-size: 2rem;
      }
    }
    .wraith {
      border: 1px solid rgba(233, 226, 202, 0.4);
      height: 600px;
      background: url("../assets/img/samurai/samurai_1_wraith.png");
      background-size: cover;
      background-position: top;
      border-top-left-radius: 25px;
      transition: all 0.1s ease;
    }
    .ryder {
      border: 1px solid rgba(233, 226, 202, 0.4);
      height: 600px;
      background: url("../assets/img/samurai/samurai_2_ryder.png");
      background-size: cover;
      background-position: top;
      border-top-left-radius: 25px;
      transition: all 0.1s ease;
    }
    .luna {
      border: 1px solid rgba(233, 226, 202, 0.4);
      height: 600px;
      background: url("../assets/img/samurai/samurai_3_luna.png");
      background-size: cover;
      background-position: top;
      border-top-left-radius: 25px;
      transition: all 0.6s ease;
    }
  }
}
@media only screen and (max-width: 1440px) {
  .columns {
    margin-right: 0;
  }
  .samurai {
    padding: 2rem;
  }
  .body {
    padding: 1rem;
    font-size: 1.1rem;
  }
}
.jp-subheading {
  color: #ff2c3c;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: source-han-sans-japanese, sans-serif;
  margin-bottom: 0.75rem;
}
</style>
