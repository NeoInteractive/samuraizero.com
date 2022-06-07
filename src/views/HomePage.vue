<script setup lang="ts">
import VideoHero from "@/components/home/VideoHero.vue";
import NewsFeed from "@/components/home/NewsFeed.vue";
import MPEvolved from "../components/home/MPEvolved.vue";
import SharpenBlades from "../components/home/SharpenBlades.vue";
import RisingMoon from "../components/home/RisingMoon.vue";
import { useHead } from "@vueuse/head";
useHead({
  title:
    "Home | Samurai Zero - A multiplayer third-person arena combat game developed by Neo Interactive - Official Neo Interactive Site ",
  meta: [
    {
      name: `description`,
      content:
        "Play as a unique cast of super powered Samurai and experience a unique blend of fast-paced, third-person arena combat set in the beautiful science fantasy world of Edo. Releasing: When it's Ready.",
    },
  ],
});
</script>

<template>
  <VideoHero />
  <RisingMoon />
  <MPEvolved />
  <SharpenBlades />
  <NewsFeed />
  <div></div>
</template>

<style scoped></style>
