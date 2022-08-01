<script setup lang="ts">
const route = useRoute()
console.log(route.params, 'PROFILE PAGE')
</script>

<template>
  <UserProfile />
</template>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: user
  requiresAuth: true
</route>
