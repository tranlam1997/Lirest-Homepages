<script setup lang="ts">
defineProps<{
  errorDetail: string
}>()
</script>

<template>
  <span class="error-message">{{ errorDetail }}</span>
</template>

<style scoped>
  .error-message {
  color: #f44336;
  font-size: 0.8rem;
}
</style>
