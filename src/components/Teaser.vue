<template>
  <section
    class="trailer video has-vertically-aligned-content has-text-centered"
  >
    <a href="http://youtube.com/watch?v=ipwO6zA361Y">
      <h1 class="title">
        <i class="fal fa-play-circle"></i>&nbsp; Watch Teaser
      </h1>
    </a>
  </section>
</template>

<script>
export default {
  name: "Teaser",
  components: {},
};
</script>

<style lang="scss" scoped>
section {
  background: $dark-3-5;
  background: url(../assets/cog-1600-web.jpg) !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title,
  .subtitle {
    color: whitesmoke;
    line-height: 1.4;
    letter-spacing: 0.05rem;
    text-shadow: $text-shadow;
  }
  .title {
    padding-bottom: 1rem;
    font-size: 2.3rem;
  }
  .subtitle {
    font-size: 1.4rem;
  }
}
img {
  border-radius: 4px;
  box-shadow: 0 20px 150px $dark-3-5;
}
</style>
