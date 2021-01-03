<template>
  <div>
    <footer>
      <div class="content">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <div class="logo-wrapper">
                <a href="https://neointeractive.dev" target="_blank">
                  <img src="../assets/img/ni.svg" width="200px" alt="Logo" />
                </a>

                <p class="copy">
                  &copy; 2018-2021 Neo Interactive
                  <br />
                  <br />
                  <span>
                    Made with ❤️ and ☕ by the team at Neo Interactive
                  </span>
                </p>
              </div>
            </div>
            <div class="column is-3">
              <a
                class="navbar-item footer-navbar-item"
                href="https://playtest.samuraizero.com/"
                >Playtesters</a
              >
              <a
                class="navbar-item footer-navbar-item"
                href="https://www.igdb.com/games/samurai-zero/presskit"
                >Press</a
              >
              <router-link class="navbar-item footer-navbar-item" to="/faq"
                >Frequently Asked Questions</router-link
              >
              <a
                class="navbar-item footer-navbar-item"
                href="https://patreon.com/neointeractive"
                >Support us on Patreon</a
              >
            </div>
            <div class="column is-3">
              <a
                class="navbar-item footer-navbar-item"
                href="https://status.samuraizero.com/"
                >Status Page</a
              >
              <a
                class="navbar-item footer-navbar-item"
                href="//legal.neointeractive.gg/privacy"
                >Terms of Use</a
              >
              <a
                class="navbar-item footer-navbar-item"
                href="//legal.neointeractive.gg/terms"
                >Privacy Policy</a
              >
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
  border-bottom: 5px solid grey;
  border-color: #f96854;
  border-image-slice: 1;
  border-width: 2px;
  font-family: hypatia-sans-pro, sans-serif;
}

img {
  display: block;
  opacity: 0.4;
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
  &:hover {
    background: #161616;
    border-left: 2px solid #ff2c3c;
  }
}
.content {
  padding-top: 50px !important;
  background: #030101;
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
  padding-top: 105px;
  padding-bottom: 10px;
  opacity: 0.8;
  text-align: left;
  color: white span {
    opacity: 0.5;
  }
}
</style>
