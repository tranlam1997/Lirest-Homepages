<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <router-link to="/login">
    <div
      border="rounded-lg"

      text-l w-auto flex-row btn
    >
      <p>{{ t('navigator.sign-in') }}</p>
      <div
        i-bx:log-in
        self-center
        text-xl
      />
    </div>
  </router-link>
</template>

<style scoped></style>
