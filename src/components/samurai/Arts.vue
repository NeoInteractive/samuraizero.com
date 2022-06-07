<script setup lang="ts">
interface ArtsArray {
  name: string;
  description: string;
  art: string;
  heroic: boolean;
}
defineProps<{
  arts: ArtsArray[];
}>();

const getImagePath = (file_name: string) => {
  const path = `../../assets/arts/${file_name}`;
  return new URL(path, import.meta.url).href;
};
</script>

<template>
  <section id="arts-wrapper" class="px-8">
    <h1 class="text-4xl text-gray-300 uppercase font-black mb-4">Abilities</h1>
    <div v-for="art in arts" :key="art.name" class="art">
      <div class="flex flex-row items-center">
        <img :src="getImagePath(art.art)" class="rounded aspect-square w-20" />
        <p class="ml-2.5 text-xl text-[#e9e2ca]">{{ art.name }}</p>
      </div>
      <div>
        <p
          class="mx-2.5 text-ms uppercase font-bold"
          :class="art.heroic ? 'text-amber-400' : 'text-slate-400 '"
        >
          {{ art.heroic ? "Heroic" : "Skill" }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#arts-wrapper {
  @apply flex flex-row flex-wrap w-full gap-2;
}
.art {
  @apply flex flex-row justify-between bg-black items-center w-full p-1 border border-[#e9e2ca]/60;
}
</style>
