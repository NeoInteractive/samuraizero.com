<script setup lang="ts">
defineProps<{
  history: string;
  historyMore: string;
  thisIs: boolean;
  samurai: string;
}>();

const videoURL = (samurai: string): string => {
  return `https://cdn.samuraizero.com/this-is/${samurai}.mp4`;
};
const posterURL = (samurai: string): string => {
  return `https://cdn.samuraizero.com/this-is/thisis-${samurai}-poster.jpg`;
};
</script>

<template>
  <section id="history-wrapper" class="px-8">
    <h1
      class="text-4xl text-gray-300 uppercase font-black mb-4 xl:text-left text-center"
    >
      History
    </h1>
    <section>
      <video
        v-if="thisIs"
        class="aspect-video"
        controls
        controlsList="nodownload"
        :poster="posterURL(samurai)"
      >
        <source :src="videoURL(samurai)" type="video/mp4" />
      </video>
      <p class="text-xl tracking-wide py-4">
        {{ history }}
      </p>
      <details class="mb-4">
        <summary class="text-[#ff2c3c] select-none hover:cursor-pointer">
          Read More
        </summary>
        <p class="text-xl tracking-wide py-4" v-html="historyMore"></p>
      </details>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
