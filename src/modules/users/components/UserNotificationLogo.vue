<script setup lang="ts">
defineProps<{
  active: boolean
  hasNotification: boolean
  [k: string]: any
}>()
</script>

<template>
  <div>
    <div
      v-if="!active"
      class="i-carbon:notification"
    />
    <div
      v-if="hasNotification"
      class="i-carbon:notification-new"
    />
    <div
      v-if="active"
      class="i-carbon:notification-off"
    />
  </div>
</template>

<style scoped></style>
