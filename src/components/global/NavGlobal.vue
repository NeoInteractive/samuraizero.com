<script setup lang="ts">
import { ref } from "vue";
import SZButton from "@/components/global/SZButton.vue";

// let scrollPosition = ref(window.scrollY);

// let navbarColor = computed(() => {
//   if (scrollPosition.value > 100) return "bg-black/90 backdrop-blur-md";
//   return "rgba(0,0,0,.5)";
// });

// const updateScroll = () => (scrollPosition.value = window.scrollY);

// onMounted(() => {
//   window.addEventListener("scroll", updateScroll);
// });

const navItems = [
  {
    name: "Home",
    url: "/",
    class: "nav-link",
    external: false,
  },
  {
    name: "Samurai",
    url: "/samurai",
    class: "nav-link",
    external: false,
  },
  {
    name: "News",
    url: "https://news.samuraizero.com/",
    class: "nav-link",
    external: true,
  },
  {
    name: "Roadmap",
    url: "https://szero.dev/roadmap",
    class: "nav-link",
    external: true,
  },
  {
    name: "Patreon",
    url: "https://patreon.com/neointeractive",
    class: "nav-link",
    external: true,
  },
  {
    name: "Discord",
    url: "https://szero.dev/discord",
    class: "nav-link",
    external: true,
  },
];
let mobileNavOpen = ref(false);
</script>
<template>
  <nav
    class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-8 text-lg text-gray-700 bg-white uppercase font-bold tracking-wider"
  >
    <div>
      <router-link to="/">
        <img
          src="@/assets/branding/sz-logo-main-sm.png"
          class="nav-logo"
          alt="Samurai Zero Logo"
        />
      </router-link>
    </div>

    <svg
      @click="mobileNavOpen = !mobileNavOpen"
      xmlns="http://www.w3.org/2000/svg"
      id="menu-button"
      class="h-6 w-6 cursor-pointer md:hidden block text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>

    <div
      class="w-full md:flex md:items-center md:w-auto"
      :class="mobileNavOpen ? 'py-8 ' : 'hidden'"
      id="menu"
    >
      <ul
        class="pt-4 text-white md:flex md:justify-between md:pt-0"
        :class="mobileNavOpen ? 'text-center text-2xl columns-2' : 'text-base'"
      >
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :class="item.class"
          :to="!item.external ? item.url : ''"
          :href="item.external ? item.url : ''"
          :target="item.external ? '_blank' : ''"
          class="text-shadow"
        >
          {{ item.name }}
        </router-link>
      </ul>
      <div
        class="flex justify-center w-full xl:ml-4"
        :class="mobileNavOpen ? 'pt-8' : 'text-base'"
      >
        <SZButton href="https://szero.dev/steam" type="external" theme="steam">
          <i class="fa-brands fa-steam mr-4" /> Wishlist on Steam
        </SZButton>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  @apply fixed w-full top-0 px-6 sm:px-3 md:py-6 py-3 z-[99] transition-all duration-300 bg-black/70 backdrop-blur-md;
}
.nav-container {
  @apply flex md:flex-nowrap flex-wrap justify-between items-center mx-auto md:px-0 px-4 container;
}
.nav-items {
  @apply flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-lg font-bold text-[#e9e2ca] items-center;
}
.nav-logo {
  @apply mr-3 md:h-[75px] h-8;
}
.nav-burger {
  @apply inline-flex items-center p-2 ml-3 text-2xl text-gray-50 rounded-lg xl:hidden hover:bg-gray-800 focus:outline-none aspect-square focus:ring-2 focus:ring-gray-900;
}
.nav-link {
  @apply md:p-4 py-2 block hover:text-red-400 select-none cursor-pointer;
}
</style>
