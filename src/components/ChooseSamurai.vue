<template>
  <section class="faceOff">
    <div class="container">
      <div class="columns">
        <div class="column is-4 va swing">
          <center>
            <img class=" banner" src="@/assets/img/ochi_banner.png" alt="" />
          </center>
        </div>
        <div class="column is-8 right va">
          <h3 class="jp-subheading" lang="jp">あなたの過去に目を向ける</h3>

          <h1 class="title">Choose your samurai</h1>
          <div class="content">
            <p>
              Perfect your skills in a team-focused arena fighting game;
              mastering the various skills and strengths of powerful Samurai
              tailored to your own playstyle.
            </p>
            <p>
              Discover everything the world of Edo has to offer. From the
              ancient mystical ruins, to technologically marvelous capitals,
              discover the vast history of conflict that has shaped the world of
              Edo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.faceOff {
  background: radial-gradient(
      136.03% 54.57% at 50% 48.04%,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 60.63%,
      #000000 80%
    ),
    url(../assets/img/ryder-gauntlet.jpg);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding-top: 15rem;
  padding-bottom: 10rem;
  .column {
    height: 1000px;
  }
}
.banner {
  width: 250px;
  height: auto;
}
.va {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

[type="radio"] {
  display: none;
}
.right {
  .jp-subheading {
    padding-left: 10rem;
    color: #ff2c3c;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: source-han-sans-japanese, sans-serif;
    margin-bottom: 0.75rem;
  }
  .title {
    padding-left: 10rem;
    color: #e9e2ca;
    text-transform: uppercase;
    font-family: hypatia-sans-pro, sans-serif;
    font-size: 3rem;
    padding-bottom: 0.75rem;
    border-bottom: 5px solid #faf7eb;
    letter-spacing: 2px;
  }
  .content {
    padding-left: 15rem;
    p {
      letter-spacing: 0.1rem;
      text-align: justify;
      font-family: hypatia-sans-pro, sans-serif;
      font-size: 1.4rem;
      color: #faf7eb;
    }
  }
}
.swing {
  animation: swing ease-in-out 4s infinite alternate;
  transform-origin: center -20px;
  float: left;
}
.swing img {
  display: block;
}

@keyframes swing {
  0% {
    transform: rotate(0.75deg);
  }
  100% {
    transform: rotate(-0.75deg);
  }
}
</style>
