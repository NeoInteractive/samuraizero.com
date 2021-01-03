<template>
  <div class="content">
    <section class="hero">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Frequently Asked Questions</h1>
        </div>
      </div>
    </section>
    <main>
      <div class="intro">
        <div class="container">
          <FAQ />
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
import FAQ from "@/components/FAQBlock.vue";
export default {
  name: "Thankyou",
  components: {
    Navbar,
    Footer,
    Newsletter,
    FAQ,
  },
};
</script>
<style lang="scss" scoped>
$shadow-large: 0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1);
.hero {
  background-image: linear-gradient(150deg, #030101d3, #1f1f1fda),
    url("../assets/img/hero-texture.jpg") !important;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .title {
    color: white;
    font-size: 3rem;
  }
}
.intro {
  background: linear-gradient(150deg, #030101, #1b1b1b);
  padding-top: 10rem;
  padding-bottom: 10rem;
  .body {
    color: rgb(240, 240, 240);
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
  }
}
.samurai {
  background: #030101;
  padding-top: 10rem;
  padding-bottom: 10rem;
  .title {
    font-size: 3rem;
    color: white;
    span {
      color: #ff2c3c;
    }
  }
  p {
    font-size: 1.5rem;
    color: white;
    font-family: "Hypatia Sans Pro", sans-serif;
  }
  .profile {
    box-shadow: $shadow-large;
    transition: all 0.1s ease;
    &:hover {
      margin-top: -3px;
    }
    .level {
      color: white;
      margin-top: 0;
      background: #1f1f1fda;
      padding: 1rem;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      .title {
        font-size: 2rem;
      }
    }
    .wraith {
      border: 1px solid #1f1f1f;
      height: 600px;
      background: url("../assets/img/samurai/samurai_1_wraith.png");
      background-size: cover;
      background-position: top;
    }
    .ryder {
      border: 1px solid #1f1f1f;
      height: 600px;
      background: url("../assets/img/samurai/samurai_2_ryder.png");
      background-size: cover;
      background-position: top;
    }
    .unknown {
      border: 1px solid #1f1f1f;
      height: 600px;
      background: url("../assets/img/samurai/samurai_3_hidden.png");
      background-size: cover;
      background-position: top;
    }
  }
}
</style>
