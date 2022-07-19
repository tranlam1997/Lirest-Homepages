<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <RouterLink flex-row icon-btn to="/" :title="t('button.home')" text-gray-900 dark:text-gray-100>
    <div i-dashicons:admin-home />
  </RouterLink>
</template>

<style scoped>

</style>
