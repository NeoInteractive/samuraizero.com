<template>
  <section class="app">
    <section class="hero is-fullheight">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="titles">
            <img
              src="../assets/img/sz-logo-main.png"
              width="428px"
              style="margin-left: .2rem"
            /><br /><br />
            <router-link
              to="/samurai"
              id="zero-btn"
              class="button zero-btn"
              style="margin-right: 20px"
              >Learn More</router-link
            >
            <a
              href="https://patreon.com/neointeractive"
              target="_blank"
              class="button is-patreon zero-btn patreon"
              style="color: white"
            >
              <i
                class="fab fa-patreon"
                style="margin-right: 10px; color: white"
              ></i>
              &emsp;Support on Patreon
            </a>
          </div>
        </div>
      </div>
    </section>
    <News data-aos="fade-up" data-aos-duration="1500" />
    <KeyFeatures data-aos="fade-up" data-aos-duration="1500" />
    <ChooseSamurai data-aos="fade-up" data-aos-duration="1500" />
    <FaceOff data-aos="fade-up" data-aos-duration="1500" />
    <CTApatreon data-aos="fade-up" data-aos-duration="1500" />
    <Newsletter />
    <Footer />
  </section>
</template>

<script>
import AOS from "aos";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Newsletter from "@/components/Newsletter.vue";
import FaceOff from "@/components/FaceOff.vue";
import ChooseSamurai from "@/components/ChooseSamurai.vue";
import KeyFeatures from "@/components/KeyFeatures.vue";
import News from "@/components/News.vue";
import CTApatreon from "@/components/CTApatreon.vue";
export default {
  components: {
    Navbar,
    Footer,
    Newsletter,
    News,
    FaceOff,
    ChooseSamurai,
    CTApatreon,
    KeyFeatures,
  },
  created() {
    AOS.init();
  },
};
</script>

<style lang="scss" scoped>
$text-shadow: 0px 2px 4px rgba(2, 1, 24, 0.466);
.app {
  background: #000000;
}
// hero video -> https://neointeractive.b-cdn.net/web/heroteaser-minres.mp4
.hero {
  background: radial-gradient(
      189.96% 61.18% at 50% 38.82%,
      rgba(23, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.80319) 50.22%,
      #000000 90%
    ),
    url("../assets/img/Ryder-Hero-Flower-Alt.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: saturate(125%);
  .body {
    display: flex;
    max-width: 2000px;
    .titles {
      padding-right: 15rem;
      text-align: left;
      .title,
      .subtitle {
        font-family: Hypatia Sans Pro, sans-serif !important;
        font-weight: 700;
        font-style: normal;
        color: ghostwhite;
        text-shadow: $text-shadow;
      }
    }
  }
  .hero-foot {
    height: 90px;
    background: linear-gradient(to bottom, #00000000, rgba(0, 0, 0, 1));
    .navbar-item {
      color: white;
      img {
        max-height: 50px;
      }
      &:hover {
        background: transparent !important;
        cursor: default;
      }
    }
  }
}
.subnav {
  min-height: 80px;
  background: #ac000e;
  color: white;
  font-family: "Hypatia Sans Pro", sans-serif;
  letter-spacing: 0.02rem;
  strong {
    color: white;
  }
  a {
    font-weight: bold;
    color: white;
  }
  padding-bottom: 10px;
}
#intro {
  background: url("../assets/img/dust.png"),
    linear-gradient(150deg, #030101, #1a1a1b);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 10rem;
  h2 {
    line-height: 2.5rem;
    letter-spacing: 0.01rem;
    text-align: left;
    font-weight: 300;
    font-family: "Hypatia Sans Pro", sans-serif !important;
  }
  .sz-flower {
    margin-top: 7rem;
    margin-bottom: 1rem;
    svg {
      height: 100px;
    }
  }
  .intro-container {
    .intro-item-title {
      margin-top: 2rem;
      font-family: "Hypatia Sans Pro", sans-serif !important;
      font-size: 3rem;
      color: #ac000e;
    }
    padding: 1rem;
    color: white;
    font-family: "Hypatia Sans Pro", sans-serif;
    font-size: 1.35rem;
    font-weight: 300;
  }
}
#trailer {
  background: linear-gradient(rgba(3, 1, 1, 0.5) 0%, rgba(3, 1, 1, 0.5) 0%),
    url("../assets/img/wraith.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 15rem;
  padding-bottom: 15rem;
  .title {
    font-size: 3rem;
    font-family: "Hypatia Sans Pro", sans-serif !important;
    font-weight: 600;
    color: #ac000e;
    text-transform: none;
  }
  img {
    cursor: pointer;
    border-radius: 10px;
  }
}
.section-title-wrapper {
  hr {
    margin-top: 2rem;
  }
  .section-title {
    text-transform: uppercase;
    color: white;
    font-size: 2.2rem;
    font-weight: 900 !important;
  }
  .section-subtitle {
    color: white;
    font-size: 1.5rem;
  }
}
iframe {
  margin: 0 !important;
  height: 100% !important;
}
hr {
  background: #ac000e;
}
.rotate {
  animation: rotation 120s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.is-partreon {
  svg {
    margin-right: 10px;
  }
}

@media only screen and (max-width: 1330px) {
  .hero {
    background: linear-gradient(rgba(3, 1, 1, 0.5) 0%, rgba(3, 1, 1, 0.5) 0%),
      url("../assets/img/Ryder-Hero-Flower-Alt__mobile.jpg") !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: left;
  }
}
@media only screen and (max-width: 1440px) {
  .hero {
    background: linear-gradient(rgba(3, 1, 1, 0.5) 0%, rgba(3, 1, 1, 0.5) 0%),
      url("../assets/img/Ryder-Hero-Flower__mobile.jpg") !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: top;
    line-break: initial;
  }
  .trailer-callout {
    display: none;
  }
  .body {
    padding-left: 3rem;
    .titles {
      padding-right: 3rem !important;
      text-align: center !important;
    }
    .button {
      margin-top: 2rem;
    }
  }
  .subnav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  #intro,
  #trailer {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: center;
  }
}
</style>
