<template>
  <div>
    <footer>
      <div class="content">
        <div class="container">
          <div class="columns">
            <div class="column is-3">
              <div class="logo-wrapper">
                <a href="https://neointeractive.dev" target="_blank">
                  <img src="../assets/img/ni.svg" width="200px" alt="Logo" />
                </a>
              </div>
            </div>
            <div class="column is-9 va">
              <div class="level" style="padding-top: .5rem">
                <router-link class="level-item footer-navbar-item" to="/">
                  Main
                </router-link>
                <router-link class="level-item footer-navbar-item" to="/">
                  Gameplay Features
                </router-link>
                <router-link class="level-item footer-navbar-item" to="/">
                  Samurai
                </router-link>
                <router-link class="level-item footer-navbar-item" to="/">
                  News
                </router-link>
                <router-link class="level-item footer-navbar-item" to="/">
                  Merch
                </router-link>
                <router-link class="level-item footer-navbar-item" to="/">
                  FAQ
                </router-link>
                <a
                  class="level-item footer-navbar-item"
                  href="https://patreon.com/neointeractive"
                  >Patreon</a
                >
                <a
                  class="level-item footer-navbar-item"
                  href="https://twitter.com/playsamuraizero"
                >
                  <i class="fab fa-twitter"> </i>
                </a>
                <a
                  class="level-item footer-navbar-item"
                  href="https://instagram.com/playsamuraizero"
                >
                  <i class="fab fa-instagram"> </i>
                </a>
                <a
                  class="level-item footer-navbar-item"
                  href="https://www.youtube.com/channel/UCR0aJEK80HK53sHmUGTbCHw"
                >
                  <i class="fab fa-youtube"> </i>
                </a>
                <a
                  class="level-item footer-navbar-item"
                  href="https://www.twitch.tv/neointeractive"
                >
                  <i class="fab fa-twitch"> </i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div class="level">
            <div class="level-left">
              <div class="level-item copy">
                Made with ❤️ and 🍻 by the team at Neo Interactive <br />
                &copy; 2021 Neo Interactive LLC
              </div>
            </div>
            <div class="level-right">
              <div class="level-item copy">Privacy Policy</div>
              <div class="level-item copy">Terms of Service</div>
              <div class="level-item copy">Code of Conduct</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  background-color: rgb(15, 15, 15);
  border-bottom: 1px solid #e9e2ca;
  font-family: hypatia-sans-pro, sans-serif;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

img {
  display: block;
  opacity: 0.8;
  transition: all 300ms linear;
  &:hover {
    opacity: 1;
  }
}

ul {
  text-align: left;
  li,
  a {
    list-style-type: none;
    color: #e9e2ca !important;
    line-height: 2.6rem;
    font-family: hypatia-sans-pro, sans-serif;
  }
}
.footer-navbar-item {
  color: #e9e2ca !important;
  font-family: hypatia-sans-pro, sans-serif;
  padding: 5px;
  transition: 300ms all ease;
  font-size: 1.2rem;
  &:hover {
    color: #ff2c3c !important;
  }
}
.content {
  padding-top: 50px !important;
  background-color: rgb(15, 15, 15);
  color: #e9e2ca;
  font-family: hypatia-sans-pro, sans-serif;
  font-weight: 300;
  padding: 10px;

  a {
    color: rgb(255, 44, 60);

    &:hover {
      color: #ff2c3c;
    }
  }
}

.copy {
  padding-top: 25px;
  padding-bottom: 10px;
  opacity: 0.8;
  text-align: left;
  color: white span {
    opacity: 0.5;
  }
}
hr {
  background: rgba(248, 248, 255, 0.507);
  height: 1px;
  margin-bottom: 0;
}
</style>
