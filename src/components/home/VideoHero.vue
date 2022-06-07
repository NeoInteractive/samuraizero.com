<script setup lang="ts">
import SZButton from "@/components/global/SZButton.vue";
// defineProps<{
//   visible: boolean;
// }>();
</script>
<template>
  <header class="hero-parent-container">
    <div class="hero-content-container">
      <div class="hero-content">
        <img
          src="@/assets/branding/sz-logo-main.png"
          class="w-96 select-none"
          alt="Samurai Zero Logo with red flower"
        />
        <div class="hero-cta pt-8">
          <SZButton
            size="md"
            theme="steam"
            type="external"
            href="https://store.steampowered.com/app/1578520/Samurai_Zero/"
          >
            <p><i class="fa-brands fa-steam mr-2" />Wishlist on Steam</p>
          </SZButton>
          <SZButton
            type="external"
            href="https://youtu.be/Y9IA-OP-bi0"
            size="md"
          >
            <p><i class="fa-brands fa-youtube mr-2" />Latest Trailer</p>
          </SZButton>
        </div>
        <p class="py-6 text-shadow">Coming: When it's ready.</p>
      </div>
    </div>
    <video
      autoplay
      loop
      muted
      class="hero-video"
      poster="https://cdn.samuraizero.com/video/sz-rtz-hero-web.jpg"
    >
      <source
        src="https://cdn.samuraizero.com/video/sz-rtz-hero-web.mp4"
        type="video/mp4"
      />
    </video>
  </header>
</template>

<style scoped>
.hero-parent-container {
  @apply relative flex items-center justify-center w-full overflow-hidden bg-[#0a0a0a];
}
.hero-content-container {
  @apply relative z-30 w-full h-full text-2xl text-white bg-[#0a0a0a] bg-opacity-50 backdrop-blur-sm;
}
.hero-content {
  @apply container mx-auto flex flex-col justify-center items-center h-full  p-8  xl:py-80 lg:py-48 md:py-36 py-32;
}
.hero-title {
  font-family: "Iceland", sans-serif;
  @apply font-extrabold tracking-widest text-transparent text-7xl bg-clip-text bg-gradient-to-br from-[#d14b56] to-[#FF2C3C] max-w-[80rem] uppercase;
}
.hero-subtitle {
  font-family: "Space Grotesk", sans-serif;
  @apply text-3xl text-gray-100 pt-6 pb-10 max-w-[55rem];
}
.hero-cta {
  @apply flex flex-row gap-4;
}
.hero-video {
  @apply absolute z-10 h-full w-full object-cover;
}
</style>
