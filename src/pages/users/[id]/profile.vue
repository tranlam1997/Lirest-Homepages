<script setup lang="ts">
</script>

<template>
  <div>
    <div class="w-2/3" flex-col relative top-10 m-auto>
      <UserNavTabs self-stretch tab-name="Overview" />
      <UserProfile p-30 />
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
