<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
aside.unsupported {
  background: rgb(228, 6, 6);
  height: 100px;
  padding-top: 1rem;
  .title,
  .subtitle {
    color: white !important;
  }
}
.va {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#app {
  font-family: hypatia-sans-pro, sans-serif;
  margin: 0;
  width: 100vw !important;
  height: 100vh !important;
  background: black;
}
.button.zero-btn {
  font-family: hypatia-sans-pro, sans-serif;
  background: rgba(255, 44, 62, 0.4);
  border: 1px solid #ac000e;
  color: #e9e2ca;
  border-radius: 0px;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  padding: 1.25rem 2rem !important;
  transition: 250ms;
  &:hover {
    background: #ac000e;
    border-color: #972730 !important;
    color: #e9e2ca;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  &.patreon {
    color: #e9e2ca;
    background: rgba(249, 104, 84, 0.4);
    border: 1px solid #f96854;
    &:hover {
      background: #f96854;
      border-color: #f96854;
    }
  }
  &.white {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid #e9e2ca;
    &:hover {
      background: #f96854;
    }
    &.outlined {
      background: transparent;
    }
  }
}

// Import Bulma's core
// Set your colors
$primary: #ac000e;
$white: #e9e2ca;
$primary-invert: findColorInvert($primary);
$patreon: #f96854;
$patreon-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$colors: (
  "primary": (
    $primary,
    $primary-invert,
  ),
  "patreon": (
    $patreon,
    $patreon-invert,
  ),
);
// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
