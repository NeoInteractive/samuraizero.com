<template>
  <div class="content">
    <section class="hero is-medium">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Sign up for Alpha Testing</h1>
          <h2 class="subtitle">Get in on the action with early playtests</h2>
        </div>
      </div>
    </section>
    <main>
      <div class="intro">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-8 is-offset-2">
              <br /><br />
              <h1 class="title">Check back soon</h1>
              <h3 class="body has-text-centered">
                Alpha testing sign ups are currently closed. Follow us on
                Twitter
                <a
                  href="https://twitter.com/playsamuraizero"
                  target="_blank"
                  rel="noreferrer"
                >
                  @PlaySamuraiZero
                </a>
                for updates.
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
@media only screen and (max-width: 1440px) {
  .columns {
    margin-right: 0;
  }
  .body {
    padding: 1rem;
    font-size: 1.1rem;
  }
}
</style>
