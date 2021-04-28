<template>
  <section class="description" data-aos="fade-up" data-aos-duration="750">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-12 va has-text-centered">
          <h3 class="jp-subheading" lang="jp">最新ニュース</h3>
          <h1 class="news-title">Latest News</h1>
        </div>
        <div v-for="item in info" :key="item.id" class="column is-4 va">
          <div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <img :src="item.feature_image" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <p class="title is-4 news-title-card">{{ item.title }}</p>
              </div>
              <div class="content">
                <p>{{ item.custom_excerpt }}</p>
              </div>
              <a :href="item.url" class="button zero-btn is-fullwidth">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "News",
  components: {},
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://news.samuraizero.com/ghost/api/v2/content/posts/?key=e13efcce8f892a9cccaa14c7ae&limit=3"
      )
      .then((response) => (this.info = response.data.posts));
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 62.5em) {
  .description {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 5rem !important;
    .news-title {
      font-family: hypatia-sans-pro, sans-serif;
      padding-top: 5rem;
      padding-bottom: 2rem !important;
      font-size: 3rem;
      text-align: center;
    }
    .title {
      font-family: hypatia-sans-pro, sans-serif;
      font-size: 2.3rem;
    }
    .content {
      font-family: hypatia-sans-pro, sans-serif;
      font-size: 1.3rem !important;
      padding-bottom: 2rem;
    }
    .card {
      margin-bottom: 1rem;
    }
    button {
      height: 4rem;
      font-size: 1.4rem !important;
    }
  }
}
.description {
  background: radial-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.472) 51.1%,
      #000000 99.74%
    ),
    url(../assets/dunes-night.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 800px;
}
.card-image img {
  &:hover:after {
    border-color: #f5f5f5 !important;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
  }
}
.news-title {
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  padding-bottom: 1rem;
  letter-spacing: 2px;
  color: #e9e2ca;
  font-family: hypatia-sans-pro, sans-serif;
}
.jp-subheading {
  color: #ff2c3c;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: source-han-sans-japanese, sans-serif;
  margin-bottom: 0.75rem;
}
.card {
  background: #000000;
  border: 1px solid rgba(233, 226, 202, 0.4);
  box-shadow: none;
  color: #e9e2ca;
  .title {
    color: #e9e2ca;
  }
  .news-title-card {
    font-weight: 400 !important;
    font-family: hypatia-sans-pro, sans-serif;
    letter-spacing: 0.1rem;
    color: #e9e2ca;
  }
  .content {
    p {
      font-family: hypatia-sans-pro, sans-serif;
      font-size: 1.1rem;
      color: #faf7eb;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
// Mobile styles
@media only screen and (max-width: 450px) {
  .description {
    padding: 3rem 1rem;
  }
  .news-title {
    font-size: 2.25rem !important;
    padding-top: 0 !important;
  }
  .jp-subheading {
    margin-bottom: 0rem;
  }
}
</style>
