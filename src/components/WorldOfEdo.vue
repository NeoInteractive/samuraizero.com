<template>
  <section class="faceOff">
    <div class="container">
      <div class="columns">
        <div class="column is-12 right va">
          <div class="va">
            <h3 class="jp-subheading" lang="jp">世界の暗黒時代</h3>

            <h1 class="title">The World of Edo</h1>
            <div class="content">
              <div
                v-if="!loadVideo"
                id="thumbnail"
                @click="loadVideo = !loadVideo"
              >
                <img src="../assets/img/worldofedo.png" alt="" />
              </div>
              <iframe
                v-if="loadVideo"
                src="https://www.youtube.com/embed/06PYlgD0Yy4?&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loadVideo: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.faceOff {
  background: radial-gradient(
      136.03% 54.57% at 50% 48.04%,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0) 60.63%,
      #000000 80%
    ),
    url(../assets/img/wood-dark.jpg);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding-top: 10rem;
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
    p {
      letter-spacing: 0.05rem;
      font-family: "Space Grotesk", sans-serif;
      font-size: 1.4rem;
      color: #faf7eb;
    }
  }
}

#thumbnail {
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
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
iframe {
  width: 100%;
  aspect-ratio: 16/9;
}
// Mobile styles
@media only screen and (max-width: 450px) {
  .swing {
    display: none !important;
  }
  .faceOff {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
  .right {
    text-align: center;
    padding: 2rem;
    .jp-subheading {
      padding-left: 0rem;
    }
    .title {
      padding-left: 0rem;
      font-size: 2.25rem;
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
