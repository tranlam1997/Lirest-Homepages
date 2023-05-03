<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

defineProps<{
  type: ButtonHTMLAttributes['type']
  name?: string
  value?: string
}>()
</script>

<template>
  <button
    :type="type"
    :name="name"
    :value="value"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
  @use '../styles/scss/base/_button.scss';
</style>
