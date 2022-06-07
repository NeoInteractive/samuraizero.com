<script setup lang="ts">
const props = defineProps<{
  type: "button" | "router" | "external";
  theme?: "steam" | "white";
  to?: string;
  href?: string;
  disabled?: false;
  size?: "xs" | "sm" | "md" | "lg";
}>();

const emits = defineEmits(["click"]);
</script>

<template>
  <button
    v-if="props.type == 'button'"
    @click="emits('click')"
    :disabled="props.disabled"
    class="sz-btn-base text-shadow"
    :class="[props.theme, props.size]"
    type="button"
  >
    <slot />
  </button>
  <router-link
    v-if="props.type == 'router'"
    :to="props.to"
    class="sz-btn-base text-shadow"
    :class="[props.theme, props.size]"
  >
    <slot />
  </router-link>
  <a
    v-if="props.type == 'external'"
    :href="props.href"
    target="_blank"
    rel="noopener"
    class="sz-btn-base text-shadow"
    :class="[props.theme, props.size]"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.sz-btn-base {
  font-family: "Space Grotesk", sans-serif;
  @apply border border-[#ad1925] text-[#f7f0d9] bg-[#181818] bg-opacity-60 tracking-wide py-2 text-center px-8 transition-all duration-200 hover:cursor-pointer hover:font-bold select-none;
  &.xs {
    @apply text-xs px-4;
  }
  &.sm {
    @apply text-sm px-5;
  }
  &.md {
    @apply text-base px-6;
  }
  &.lg {
    @apply text-lg px-8;
  }
  &:hover {
    @apply bg-[#ac000e] border-[#972730];
  }
  &.steam {
    @apply text-[#f7f0d9] border border-[#004da5] bg-[#0d1b37] bg-opacity-60 hover:bg-[#000731] hover:border-[#00137c];
  }
  &.white {
    background: rgba(255, 255, 255, 0.6);
    @apply text-black border border-[#f7f0d9] bg-white bg-opacity-60 hover:bg-[#f96854];
    &.outlined {
      @apply bg-transparent;
    }
  }
}

.button.zero-btn {
  font-family: "Space Grotesk", sans-serif;
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
  &.steam {
    color: #e9e2ca;
    background: #0d1b37;
    border: 1px solid #004da5;
    &:hover {
      background: #000731;
      border-color: #00137c !important;
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
</style>
