<script setup lang="ts">
</script>

<template>
  <div>
    <div class="w-1/2" flex-col>
      <UserNavTabs self-stretch />
      <UserProfile class="p-10" />
    </div>
  </div>
</template>

<style scoped>
</style>

<route lang="yaml">
meta:
  layout: user
  requiresAuth: true
</route>
