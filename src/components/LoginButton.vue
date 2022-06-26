<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div border="rounded-lg" w-auto text-l self-center btn>
    <router-link to="" icon-btn flex-row>
      <p>{{ t('navigator.sign-in') }}</p>
      <div i-bx:log-in self-center text-xl />
    </router-link>
  </div>
</template>

<style scoped>
</style>
