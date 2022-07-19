<script setup lang="ts">
import { toggleDark } from '@/composables'

const { t } = useI18n()
</script>

<template>
  <button
    class="icon-btn !outline-none" flex-row :title="t('button.toggle_dark')" text-gray-900
    dark:text-gray-100 @click="toggleDark()"
  >
    <div i="carbon-sun dark:carbon-moon" />
  </button>
</template>

<style scoped>
</style>
