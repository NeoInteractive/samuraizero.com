<script setup lang="ts">
import NavGlobal from "@/components/global/NavGlobal.vue";
import TheFooter from "@/components/global/TheFooter.vue";
</script>

<template>
  <NavGlobal />
  <div>
    <router-view></router-view>
  </div>
  <TheFooter />
</template>

<style lang="scss">
.text-shadow {
  text-shadow: 3px 2px 2px rgb(0, 0, 0);
}
</style>
