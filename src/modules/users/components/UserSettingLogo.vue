<script setup lang="ts">
defineEmits<{
  (e: 'toggleUserMiniMenu'): void
}>()
</script>

<template>
  <div cursor-pointer @click="$emit('toggleUserMiniMenu')">
    <i click class="fa-solid fa-bars fa-2x" />
    <slot />
  </div>
</template>

<style scoped>
</style>
