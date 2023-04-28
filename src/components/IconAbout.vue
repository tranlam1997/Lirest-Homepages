<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <RouterLink

    to="/about"
    :title="t('button.about')"

    flex-row text-gray-900 icon-btn dark:text-gray-100
  >
    <div i-carbon-dicom-overlay />
  </RouterLink>
</template>

<style scoped></style>
