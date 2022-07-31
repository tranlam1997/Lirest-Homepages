<script setup lang="ts">
defineProps<{
  name: string
  content: string
}>()
</script>

<template>
  <label :for="name">{{ content }}</label>
</template>

<style scoped>

</style>
