<template>
  <section class="faceOff">
    <div class="container">
      <div class="columns">
        <div class="column is-6 left">
          <div class="va">
            <h3 class="jp-subheading" lang="jp">未来を見るために</h3>
            <h1 class="title">Face off in the science fantasy world of Edo</h1>
            <div class="content">
              <p>
                Perfect your skills in a team-focused arena fighting game,
                mastering the various skills and strengths of powerful Samurai.
              </p>
              <p>
                Discover everything the world of Edo has to offer. From the
                ancient mystical ruins, to technologically marvelous capitals,
                discover the vast history of conflict that has shaped the world
                of Edo.
              </p>
            </div>
          </div>
        </div>
        <div class="column is-6 va slider">
          <section id="slider">
            <input type="radio" name="slider" id="s1" checked />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <label for="s1" id="slide1"></label>
            <label for="s2" id="slide2"></label>
            <label for="s3" id="slide3"></label>
          </section>
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
    url(../assets/img/blazing-cliffs_dark.png);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding-top: 15rem;
  padding-bottom: 15rem;
  .column {
    height: 1000px;
  }
}
.va {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

[type="radio"] {
  display: none;
}
.left {
  .jp-subheading {
    color: #ff2c3c;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: source-han-sans-japanese, sans-serif;
    margin-bottom: 0.75rem;
  }
  .title {
    color: #e9e2ca;
    text-transform: uppercase;
    font-family: "Space Grotesk", sans-serif;
    font-size: 3rem;
    padding-bottom: 0.75rem;
    border-bottom: 5px solid #faf7eb;
    letter-spacing: 2px;
  }
  .content {
    padding-left: 15rem;
    p {
      letter-spacing: 0.1rem;
      font-family: "Space Grotesk", sans-serif;
      font-size: 1.4rem;
      color: #faf7eb;
    }
  }
}
#slider {
  height: 35vw;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}

#slider label {
  margin: auto;
  width: 30rem;
  height: 100%;
  border-radius: 4px;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.4s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#s1:checked ~ #slide4,
#s2:checked ~ #slide5,
#s3:checked ~ #slide1,
#s4:checked ~ #slide2,
#s5:checked ~ #slide3 {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transform: translate3d(-30%, 0, -200px);
}

#s1:checked ~ #slide5,
#s2:checked ~ #slide1,
#s3:checked ~ #slide2,
#s4:checked ~ #slide3,
#s5:checked ~ #slide4 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  transform: translate3d(-15%, 0, -100px);
}

#s1:checked ~ #slide1,
#s2:checked ~ #slide2,
#s3:checked ~ #slide3,
#s4:checked ~ #slide4,
#s5:checked ~ #slide5 {
  box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);
  transform: translate3d(0, 0, 0);
}

#s1:checked ~ #slide2,
#s2:checked ~ #slide3,
#s3:checked ~ #slide4,
#s4:checked ~ #slide5,
#s5:checked ~ #slide1 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  transform: translate3d(15%, 0, -100px);
}

#s1:checked ~ #slide3,
#s2:checked ~ #slide4,
#s3:checked ~ #slide5,
#s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transform: translate3d(30%, 0, -200px);
}

#slide1 {
  background: url(../assets/img/faceOff_gallery_2.jpg);
}
#slide2 {
  background: url(../assets/img/faceOff_gallery_1.jpg);
}
#slide3 {
  background: url(../assets/img/faceOff_gallery_3.jpg);
}
// Mobile styles
@media only screen and (max-width: 450px) {
  .slider {
    display: none !important;
  }
  .faceOff {
    padding-top: 0rem;
    height: 750px;
  }
  .left {
    text-align: center;
    padding: 2rem;
    .jp-subheading {
      padding-left: 0rem;
    }
    .title {
      padding-left: 0rem;
      font-size: 2rem;
    }
    .content {
      padding-left: 0rem;
      p {
        letter-spacing: 0.1rem;
        text-align: center;
        font-family: "Space Grotesk", sans-serif;
        font-size: 1.4rem;
        color: #faf7eb;
      }
    }
  }
}
</style>
