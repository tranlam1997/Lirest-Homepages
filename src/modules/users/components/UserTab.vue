<script setup lang="ts">
defineProps<{
  content: string
  symbol: string
  isTabActive: boolean
}>()
</script>

<template>
  <div flex-row gap-2 cursor-pointer hover:bg-gray-800 p-3 :class="isTabActive ? 'tab' : ''">
    <div self-center :class="symbol" />
    <p>{{ content }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '../../../styles/scss/user/_tab.scss';
</style>
