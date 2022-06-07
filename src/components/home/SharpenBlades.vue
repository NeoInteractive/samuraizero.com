<script setup lang="ts"></script>

<template>
  <div id="news-feed" class="bg-gray-900 xl:py-56 py-16">
    <div class="container mx-auto xl:px-48 px-8">
      <center>
        <img
          src="@/assets/branding/flower.svg"
          class="aspect-square h-24 spin"
        />
      </center>

      <h1 class="text-5xl text-[#f7f0d9] pb-8 font-bold text-center mb-2 mt-4">
        Sharpen your Blades, Samurai
      </h1>
      <p class="text-[#f7f0d9]/80 text-2xl text-shadow pb-16">
        Battle through Edo with any Samurai. Each with their own combat style
        and abilities, no two Samurai play alike. Not only will every character
        offer insight into their personal journeys, but will also engage the
        player in their web of relationships and the world itself.
      </p>
      <section class="flex md:flex-row flex-col gap-8 items-top items-center">
        <div class="flex flex-col xl:w-1/3 md:w-1/2 w-full">
          <h1 class="text-3xl text-[#f7f0d9] pb-8 font-bold">
            Advanced Movement
          </h1>
          <img src="@/assets/placeholder-img.jpg" class="rounded-md mb-4" />
          <p class="text-[#f7f0d9]/80 text-xl text-shadow">
            Smooth and responsive means of traversal. Double jump, wall running,
            and dashes are all at the player's disposal to traverse dynamic maps
            and get the edge on their opponents.
          </p>
        </div>
        <div class="text-white text-xl xl:w-1/3 md:w-1/2 w-full">
          <h1 class="text-3xl text-[#f7f0d9] pb-8 font-bold">Dynamic Combat</h1>
          <img src="@/assets/placeholder-img.jpg" class="rounded-md mb-4" />
          <p class="text-[#f7f0d9]/80 text-xl text-shadow">
            Discover unique forms of fighting that influence the balance of
            power. Complete combos with combat arts, use special abilities with
            Skill arts, and flourish with your character's signature Heroic
            Arts.
          </p>
        </div>
        <div class="text-white text-xl xl:w-1/3 md:w-1/2 w-full">
          <h1 class="text-3xl text-[#f7f0d9] pb-8 font-bold">
            Gameplay Tactics
          </h1>
          <img src="@/assets/placeholder-img.jpg" class="rounded-md mb-4" />
          <p class="text-[#f7f0d9]/80 text-xl text-shadow">
            Customize your character's special abilities and stats to create
            your own custom play style. With countless combinations, you can
            create the perfect version of the Samurai you want to fight as.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#news-feed {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("@/assets/bg/blazing-cliffs_dark.png") no-repeat top center;
  background-size: cover;
  background-repeat: no-repeat;
}

.spin {
  animation: spin 180s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
