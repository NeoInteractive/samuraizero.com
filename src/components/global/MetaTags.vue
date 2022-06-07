<script setup lang="ts">
import { useHead } from "@vueuse/head";

const props = defineProps<{
  title: string;
  description: string;
}>();

useHead({
  title: `${props.title} | Samurai Zero - A multiplayer third-person arena combat game developed by Neo Interactive - Official Neo Interactive Site `,
  meta: [
    {
      name: `description`,
      content: props.description,
    },
  ],
});
</script>

<template></template>
