<script setup lang="ts">
import { ref } from "vue";
import SamuraiFrame from "@/components/samurai/SamuraiFrame.vue";
import { useHead } from "@vueuse/head";
useHead({
  // Can be static or computed
  title:
    "All Samurai | Samurai Zero - A multiplayer third-person arena combat game developed by Neo Interactive - Official Neo Interactive Site ",
  meta: [
    {
      name: `description`,
      content:
        "A diverse cast of Samurai await. Each feature their own unique weapons, skill arts, and gameplay tactics.",
    },
  ],
});
let playRTZ = ref(false);
</script>

<template>
  <div id="hero" class="bg-[#000000] pt-56 text-white">
    <div class="container mx-auto text-center pb-12 flex justify-center">
      <div class="max-w-[50rem]">
        <h3
          class="font-black text-[#ff2c3c] uppercase tracking-widest text-shadow"
        >
          Samurai
        </h3>
        <h1 class="text-6xl font-black text-shadow py-4 text-[#e9e2ca]">
          Age of the Samurai
        </h1>
        <p class="tracking-wide text-2xl text-shadow text-gray-100">
          A diverse cast of Samurai await. Each feature their own unique
          weapons, skill arts, and gameplay tactics.
        </p>
      </div>
    </div>
  </div>
  <section id="samurai" class="bg-black py-20 text-center px-8">
    <div class="container mx-auto flex xl:flex-row flex-wrap justify-center">
      <SamuraiFrame slug="ryder" name="Ryder" />
      <SamuraiFrame slug="luna" name="Luna" />
      <SamuraiFrame slug="wraith" name="Wraith" />
    </div>
    <h2 class="text-[#949494]/80 text-xl uppercase font-bold mt-12">
      More will be revealed soon as we continue development
    </h2>
  </section>
  <section class="bg-[#0a0a0a] text-center">
    <div class="container mx-auto text-left font-light pb-48">
      <h1
        class="text-5xl font-black text-shadow py-12 text-[#e9e2ca] text-center"
      >
        The World of Edo
      </h1>
      <section class="flex flex-row items-top items-center px-8">
        <div class="flex flex-col xl:w-2/3 w-full mx-auto">
          <p class="text-[#f7f0d9]/90 text-2xl text-shadow">
            In Samurai Zero, the Samurai are powerful warriors capable of
            reshaping the future with their own two hands. Without the gods,
            they are the last great power left to the world and its denizens.
            Through their might or wit, they may either save Edo or deal the
            finishing blow, sending it all into chaos.
          </p>
          <section id="videoWrapper" class="flex justify-center py-6">
            <div
              v-show="!playRTZ"
              @click="playRTZ = true"
              class="cursor-pointer rounded-xl overflow-hidden"
            >
              <img src="@/assets/rtz-poster.jpg" alt="" />
            </div>
            <div v-if="playRTZ" class="w-full overflow-hidden rounded-xl">
              <iframe
                class="aspect-video w-full"
                src="https://www.youtube-nocookie.com/embed/06PYlgD0Yy4?autoplay=1&origin=https://samuraizero.com&controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media;"
                allowfullscreen
              ></iframe>
            </div>
          </section>
          <p class="text-[#f7f0d9]/90 text-2xl text-shadow py-6">
            The key to a Samurai’s power is their bond with their spirit-animal
            partner. A symbiotic union, the human and non-human pair enter into
            a contractual agreement that empowers one another. To the human,
            supernatural abilities are attained, elevating them far beyond what
            a normal mortal is capable of. To the spirit, their gains are far
            more diverse, dependent on their individual ambitions. Some spirits
            bond emotionally with a single individual, while other spirits are
            tied to a clan’s family tree, with the power being passed down from
            one generation to the next.
          </p>
          <p class="text-[#f7f0d9]/90 text-2xl text-shadow">
            The powers gained by the human can vary wildly and are often
            dependent on the abilities of the spirit in question, ranging from
            faster reflexes to bending and shaping the elements themselves.
            Through combining these powers with combat and weapon training,
            Samurai are on a completely different level than that of normal
            combatants. While each Samurai pursues a personalized agenda, the
            chaotic nature of the godless world has eliminated their desire for
            isolation. With goals and grudges setting them on their respective
            paths, the Samurai are destined for a collision course with each
            other, and the world may very well... return to zero.
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#hero {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.6) 75%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("@/assets/bg/TowerWindow.jpg") no-repeat center center;
  background-size: cover;
}
.samurai-frame {
  @apply relative transition-all hover:scale-105;
  &:hover {
    @apply cursor-pointer;
  }
}

#samurai {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.6) 75%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("@/assets/bg/dunes-night.jpg") no-repeat center center;
  background-size: cover;
}
</style>
