<script setup lang="ts">
defineProps<{
  width: string
}>()
</script>

<template>
  <i
    :style="{ width }"
    class="horizontal-line"
  />
</template>

<style scoped lang="scss">
  .horizontal-line {
    height: 1px;
    background-color: #383434;
    margin-top: 1rem;
    opacity: 0.8;
  }
</style>
