<template>
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="@/assets/img/logo-textured-smallest.png" alt="Logo" />
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="burger"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div class="navbar-start">
        <router-link
          to="/"
          class="navbar-item"
          :class="{ 'is-active': currentPage == 'Home' }"
          >Main</router-link
        >
        <router-link
          to="/samurai"
          class="navbar-item"
          :class="{ 'is-active': currentPage == 'Samurai' }"
          >Gameplay Features</router-link
        >
        <router-link
          to="/gauntlet"
          class="navbar-item"
          :class="{ 'is-active': currentPage == 'Gauntlet' }"
          >Samurai</router-link
        >
        <a href="https://news.samuraizero.com/" class="navbar-item">News</a>
        <a href="https://merch.samuraizero.com/" class="navbar-item">Merch</a>
      </div>
      <div id="burger" class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-end">
          <p class="navbar-item">
            <button class="zero-btn white outlined button">Register</button>
          </p>
          <p class="navbar-item">
            <button class="zero-btn button">Login</button>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
$text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
.navbar {
  height: 110px;
  cursor: pointer;
  .navbar-item {
    font-family: hypatia-sans-pro, sans-serif;
    text-transform: uppercase;
    color: #e9e2ca;
    text-shadow: $text-shadow;
    letter-spacing: 0.15rem;
    font-weight: 400;
    cursor: pointer;
    font-size: 1rem;
    &.is-active {
      font-weight: bold;
      color: #ff4857;
    }
    &:hover {
      color: #ac000e;
    }
    img {
      max-height: 50px;
    }
    .button {
      &.patreon {
        color: white !important;
      }
    }
  }
}
.navbar-burger {
  color: #ac000e !important;
  background: black;
  height: 90px;
}
@media only screen and (max-width: 1023px) {
  .navbar-menu {
    background: #100303;
    text-align: center;
    .is-active {
      background: lighten(#100303, 10%);
    }
  }
}
</style>
