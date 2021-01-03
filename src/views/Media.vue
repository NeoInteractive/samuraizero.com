<template>
  <div class="content">
    <section class="hero">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Media</h1>
        </div>
      </div>
    </section>
    <br />
    <br />
    <main class="container">
      <div class="columns is-multiline">
        <div class="column is-12">
          <h1 class="title">Wallpapers</h1>
          <hr />
        </div>
        <div class="column is-4 has-text-centered">
          <div class="thumbnail forest"></div>
          <h1 class="title">Forest of Visions</h1>
          <a
            target="_blank"
            href="https://szero.b-cdn.net/wallpapers/Forest-1080.png"
            class="button is-small is-primary"
            >1080p</a
          >&nbsp;
          <a
            target="_blank"
            href="https://szero.b-cdn.net/wallpapers/Forest-2560.png"
            class="button is-small is-primary"
            >1440p</a
          >&nbsp;
          <a
            target="_blank"
            href="https://szero.b-cdn.net/wallpapers/Forest-2160.png"
            class="button is-small is-primary"
            >2160p</a
          >
        </div>
        <div class="column is-4 has-text-centered">
          <div class="thumbnail moonlit"></div>
          <h1 class="title">Moonlit Plains</h1>
          <a
            target="_blank"
            href="https://szero.b-cdn.net/wallpapers/Moonlit-Plains-1080.png"
            class="button is-small is-primary"
            >1080p</a
          >&nbsp;
          <a
            target="_blank"
            href="https://szero.b-cdn.net/wallpapers/Moonlit-Plains-2560.png"
            class="button is-small is-primary"
            >1440p</a
          >&nbsp;
          <a
            target="_blank"
            href="https://szero.b-cdn.net/wallpapers/Moonlit-Plains-2160.png"
            class="button is-small is-primary"
            >2160p</a
          >
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
  name: "Media",
  components: {
    Navbar,
    Footer,
    Newsletter,
  },
};
</script>
<style lang="scss" scoped>
.content {
  min-height: 100vh;
  background-image: url("../assets/img/dust.png"),
    linear-gradient(150deg, #030101, #1f1f1f);
  background-position: center;
  background-repeat: no-repeat;
}
main {
  padding-bottom: 10rem;
}
a {
  color: #ff2c3c;
}
.hero {
  background: #030101;
  background-position: center;
  background-repeat: no-repeat;
  .title {
    color: white;
    font-size: 3rem;
  }
}
.button {
  margin-top: 1rem;
}
.thumbnail {
  height: 240px !important;
  transition: all 0.1s ease;
  border: 1px solid #333333;
  border-radius: 4px;
  &:hover {
    margin-top: -3px;
  }
  &.forest {
    background: url("../assets/img/thumbnail/forest.jpg");
    background-size: cover;
    background-position: center;
  }
  &.moonlit {
    background: url("../assets/img/thumbnail/moonlit.png");
    background-size: cover;
    background-position: center;
  }
}

.title {
  font-weight: bold;
  font-size: 2.5rem;
  color: white;
}
h3 {
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: 0.01rem;
}
.hero-body {
  .title {
    font-size: 3rem;
  }
}
.text {
  margin-top: 15px;
  font-size: 25px;
  color: #e7e7e7;
  text-align: center;
  font-family: "avenir";
  font-weight: lighter;
}
</style>
