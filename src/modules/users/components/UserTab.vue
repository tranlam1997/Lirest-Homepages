<script setup lang="ts">
import { isDark } from '@/composables'

defineProps<{
  content: string
  symbol: string
  isTabActive: boolean
}>()
const isDarkMode = isDark
</script>

<template>
  <div
    flex-row cursor-pointer gap-2 p-3 hover:bg-gray-400 hover:text-gray-100 dark:hover:bg-green-700
    :class="{ 'tab': isTabActive, 'dark-tab': isDarkMode }"
  >
    <div
      self-center
      :class="symbol"
    />
    <p>{{ content }}</p>
  </div>
</template>

<style scoped lang="scss">
  @import '../../../styles/scss/user/_tab.scss';
</style>
