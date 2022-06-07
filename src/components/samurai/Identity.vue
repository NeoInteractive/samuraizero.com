<script setup lang="ts">
defineProps<{
  name: string;
  age: string;
  alias: string;
  spirit: string;
  clan: string;
}>();
</script>

<template>
  <section class="px-8">
    <h1
      class="text-4xl text-gray-300 uppercase font-black mb-4 xl:text-left text-center"
    >
      Identity
    </h1>
    <div class="w-full">
      <div class="identity-row">
        <p class="heading">Alias:</p>
        <p class="text">{{ alias }}</p>
      </div>
      <div class="identity-row">
        <p class="heading">Real Name:</p>
        <p class="text">{{ name }}</p>
      </div>
      <div class="identity-row">
        <p class="heading">Age:</p>
        <p class="text">{{ age }}</p>
      </div>
      <div class="identity-row">
        <p class="heading">Spirit Partner:</p>
        <p class="text">{{ spirit }}</p>
      </div>
      <div class="identity-row">
        <p class="heading">Affiliation:</p>
        <p class="text">{{ clan }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.identity-row {
  @apply text-xl tracking-wide py-1 flex flex-row xl:justify-between items-center;
  .heading {
    @apply uppercase font-black text-red-600 xl:text-xl text-base;
  }
  .text {
    @apply text-[#e9e2ca] xl:pl-0 pl-3 xl:text-xl text-base;
  }
}
</style>
