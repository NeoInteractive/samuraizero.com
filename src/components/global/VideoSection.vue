<script setup lang="ts">
defineProps({
  vsrc: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <header class="hero-parent-container">
    <div class="hero-content-container">
      <div class="hero-content">
        <slot />
      </div>
    </div>
    <video autoplay loop muted class="hero-video">
      <source :src="vsrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </header>
</template>

<style scoped>
.hero-parent-container {
  @apply relative flex items-center justify-center w-full overflow-hidden;
}
.hero-content-container {
  @apply relative z-30 w-full h-full text-2xl text-white bg-[#01000f] bg-opacity-90 backdrop-blur-md;
}
.hero-content {
  @apply container mx-auto flex flex-col h-full p-8 py-80;
}
.hero-video {
  @apply absolute z-10 aspect-video;
}
</style>
