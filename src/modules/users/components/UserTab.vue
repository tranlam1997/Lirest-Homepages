<script setup lang="ts">
defineProps<{
  content: string
  symbol: string
}>()
</script>

<template>
  <div flex-row gap-2 cursor-pointer hover:bg-red p-3>
    <div self-center :class="symbol" />
    <p>{{ content }}</p>
  </div>
</template>

<style scoped lang="scss">
</style>
