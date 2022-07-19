<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <a flex-row :title="t('button.toggle_langs')" text-gray-900 dark:text-gray-100>
    <div icon-btn i-carbon-language />
  </a>
</template>

<style scoped>

</style>
