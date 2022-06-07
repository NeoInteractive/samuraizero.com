<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  slug: string;
  name?: string;
}>();

const imagePath = computed(() => {
  const path = `https://cdn.samuraizero.com/www/${props.slug}/portrait.png`;
  return new URL(path, import.meta.url).href;
});
</script>

<template>
  <router-link
    tag="article"
    :to="`/samurai/${props.slug}`"
    class="p-3 xl:h-[35rem] xl:w-1/5 w-1/2"
    :class="props.slug"
  >
    <div class="samurai-frame">
      <div class="img">
        <img :src="imagePath" />
      </div>
      <div class="overlay">
        <p>{{ props.name }}</p>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.samurai-frame {
  @apply relative border-2 border-[#e9e2ca] border-opacity-25 rounded  overflow-hidden rounded-tl-3xl rounded-br-3xl bg-[#1f1f1f] transition-all;
  .img {
    @apply p-6 hover:p-4 transition-all;
  }
  &.ryder {
    @apply hover:bg-[#2f5975];
  }
  &.luna {
    @apply hover:bg-[#672f75];
  }
  &.wraith {
    @apply hover:bg-[#3f752f];
  }
  .overlay {
    @apply absolute bottom-0 h-20 bg-black/30 backdrop-blur-sm w-full flex flex-col items-center justify-center rounded-br-3xl;
    p {
      @apply text-white text-3xl font-bold;
    }
  }
}
img {
  filter: drop-shadow(0px 0px 5px rgb(0, 0, 0));
}
</style>
