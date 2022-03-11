<template>
  <div>
    <footer>
      <center class="container is-max-widescreen">
        <iframe
          src="https://store.steampowered.com/widget/1578520/"
          frameborder="0"
          width="100%"
          height="190"
        ></iframe>
      </center>
      <br /><br />
      <div class="container content">
        <div class="columns ">
          <div class="column is-3">
            <div class="logo-wrapper">
              <a href="https://neointeractive.dev" target="_blank">
                <img src="../assets/img/ni.svg" width="200px" alt="Logo" />
              </a>
            </div>
          </div>
          <div class="column is-9 va">
            <div class="level" style="padding-top: .5rem">
              <a
                class="level-item footer-navbar-item text"
                href="https://szero.dev/patreon"
              >
                Patreon
              </a>
              <a
                class="level-item footer-navbar-item text"
                href="https://roadmap.samuraizero.com/"
              >
                Roadmap
              </a>
              <router-link
                class="level-item footer-navbar-item text"
                to="/samurai"
              >
                Samurai
              </router-link>
              <a
                class="level-item footer-navbar-item text"
                href="https://szero.dev/steam"
              >
                Steam
              </a>
              <a
                class="level-item footer-navbar-item icon"
                href="https://twitter.com/playsamuraizero"
              >
                <i class="fab fa-twitter"> </i>
              </a>
              <a
                class="level-item footer-navbar-item icon"
                href="https://instagram.com/playsamuraizero"
              >
                <i class="fab fa-instagram"> </i>
              </a>
              <a
                class="level-item footer-navbar-item icon"
                href="https://www.youtube.com/channel/UCR0aJEK80HK53sHmUGTbCHw"
              >
                <i class="fab fa-youtube"> </i>
              </a>
              <a
                class="level-item footer-navbar-item icon"
                href="https://www.twitch.tv/neointeractive"
              >
                <i class="fab fa-twitch"> </i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div class="level legal">
          <div class="level-left">
            <div class="level-item copy">
              Made with ❤️ and 🍻 by the team at Neo Interactive <br />
              &copy; 2022 Neo Interactive LLC
            </div>
          </div>
          <div class="level-right">
            <div class="level-item copy">Privacy Policy</div>
            <div class="level-item copy">Terms of Service</div>
            <div class="level-item copy">Code of Conduct</div>
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
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: black;
}
.content {
  padding-top: 50px !important;
  background-color: #070707;
  color: #e9e2ca;
  font-family: hypatia-sans-pro, sans-serif;
  font-weight: 300;
  padding: 2rem;
  border: 1px solid #e9e2ca;
  a {
    color: rgb(255, 44, 60);

    &:hover {
      color: #ff2c3c;
    }
  }
}
img {
  display: block;
  opacity: 0.8;
  transition: all 300ms linear;
  &:hover {
    opacity: 1;
  }
}
i,
svg {
  width: 2rem;
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
// Mobile styles
@media only screen and (max-width: 450px) {
  iframe,
  .text,
  .legal {
    display: none;
  }
  .level-item {
    &.icon {
      display: inline-block;
      margin-right: 1.5rem;
      font-size: 1.5rem;
    }
  }
  footer {
    padding-bottom: 0;
  }
}
</style>
