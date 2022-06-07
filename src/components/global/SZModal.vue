<script setup lang="ts">
defineProps<{
  visible: boolean;
}>();
</script>

<template>
  <Teleport to="#modal">
    <div class="modal-bg" v-if="visible">
      <div class="modal">
        <p>Hello World</p>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-bg {
  @apply fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center content-center;
}
.modal {
  @apply relative bg-white rounded-lg shadow-lg p-8;
}
</style>
