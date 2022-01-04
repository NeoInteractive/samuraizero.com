<template>
  <a :href="url" :class="type" class="button is-medium zero-btn" target="_blank"
    ><i
      v-if="type === 'patreon'"
      class="fab fa-patreon"
      style="margin-right: 1rem"
    ></i>
    {{ text }}
    <span><i class="fas fa-external-link"></i></span>
  </a>
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
    url: String,
  },
};
</script>

<style lang="scss" scoped>
.zero-btn {
  font-family: "Space Grotesk", sans-serif;
  background: rgba(255, 44, 62, 0.4);
  border: 1px solid #ac000e;
  color: #e9e2ca;
  border-radius: 0px;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  padding: 1.25rem 2rem !important;
  transition: 350ms all ease-in-out;
  span {
    display: none;
    transition: 350ms all ease-in-out;
  }
  &:hover {
    span {
      margin-left: 1rem;
      display: block;
    }
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
    background: rgba(255, 255, 255, 0.582);
    border: 1px solid #e9e2ca;
    &:hover {
      background: #f96854;
    }
    &.outlined {
      background: transparent;
    }
  }
}
</style>
