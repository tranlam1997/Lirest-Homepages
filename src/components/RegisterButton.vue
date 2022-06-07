<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div border="rounded-lg" w-auto text-l self-center btn>
    <RouterLink to="" icon-btn text-white-200 flex-row>
      <p>{{ t('navigator.sign-up') }}</p>
      <span ml-1><i class="fa-solid fa-user-plus" /></span>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>
