<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <RouterLink to="/register">
    <div
      border="rounded-lg"

      text-l w-auto flex-row btn
    >
      <p>{{ t('navigator.sign-up') }}</p>
      <span ml-1><i class="fa-solid fa-user-plus" /></span>
    </div>
  </RouterLink>
</template>

<style scoped></style>
