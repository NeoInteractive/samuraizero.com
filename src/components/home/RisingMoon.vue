<script setup lang="ts">
import SZButton from "@/components/global/SZButton.vue";
</script>

<template>
  <div id="news-feed" class="bg-gray-900 xl:py-36 lg:py-32 md:py-24 py-12">
    <div class="container mx-auto px-8">
      <section class="flex flex-row gap-4 items-top items-center">
        <div class="flex flex-col xl:w-2/3 w-full">
          <h3
            class="text-[#f7f0d991] pb-4 font-black uppercase tracking-wide text-shadow"
          >
            DEV Milestone Update
          </h3>
          <h1 class="text-5xl text-[#f7f0d9] pb-8 font-bold text-shadow">
            Rising Moon Update - Patch 0.3
          </h1>
          <p class="text-[#f7f0d9]/80 text-2xl text-shadow tracking-wide">
            Samurai Zero: Patch 0.3 Rising Moon is our biggest update to Samurai
            Zero since our playtest last year. This time, we are ready to
            showcase the full vision of Samurai Zero! New Samurai, New Map, New
            Modes, New Systems, and the next Playtest dates are all covered in
            our update notes!
          </p>
          <div class="flex xl:flex-row flex-col gap-4 w-auto py-8">
            <SZButton
              type="external"
              href="https://news.samuraizero.com/whats-new-rising-moon/"
              size="md"
            >
              Rising Moon Update Notes
            </SZButton>
            <SZButton
              type="external"
              href="https://youtu.be/Y9IA-OP-bi0"
              size="md"
            >
              <i class="fa-brands fa-youtube mr-2" />Update Trailer
            </SZButton>
          </div>
        </div>
        <div class="text-white text-xl xl:w-1/3 w-0"></div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#news-feed {
  background: linear-gradient(
      to right,
      black 0%,
      rgba(0, 0, 0, 0.903) 20%,
      transparent
    ),
    url("@/assets/bg/TowerConferenceRoom.jpg") no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
