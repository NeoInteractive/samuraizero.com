<script setup lang="ts">
import SZButton from "@/components/global/SZButton.vue";
</script>

<template>
  <div id="mp-evolved" class="bg-gray-900 pt-12">
    <div class="container mx-auto px-8">
      <section
        class="flex xl:flex-row flex-col-reverse xl:gap-4 items-top items-center"
      >
        <div class="text-white text-xl xl:w-1/2">
          <img
            src="@/assets/samurai/thegangsallhere.png"
            class="text-shadow"
            alt="Left to right; portraits of Ryder, Luna, and Wraith"
          />
        </div>
        <div class="flex flex-col xl:text-right xl:w-1/2">
          <h1 class="text-5xl text-[#f7f0d9] pb-8 font-bold text-shadow">
            Competitive Multiplayer Evolved
          </h1>
          <p class="text-[#f7f0d9]/90 text-2xl text-shadow">
            Play as a cast of super powered Samurai and experience a unique
            blend of fast-paced, third-person arena combat set in the beautiful
            science fantasy world of Edo.
          </p>
          <div class="flex xl:flex-row-reverse flex-col w-auto py-8">
            <SZButton type="router" to="/samurai" size="md">
              Meet The Samurai
            </SZButton>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#mp-evolved {
  background: linear-gradient(
      to left,
      black 0%,
      rgba(0, 0, 0, 0.903) 10%,
      transparent
    ),
    url("@/assets/bg/CityOfGlassFlipped.jpg") no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
