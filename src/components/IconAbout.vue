<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <RouterLink icon-btn flex-row to="/about" :title="t('button.about')" text-gray-900 dark:text-gray-100>
    <div i-carbon-dicom-overlay />
  </RouterLink>
</template>

<style scoped>

</style>
