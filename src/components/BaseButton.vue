<script setup lang="ts">
import type { ButtonType } from './interfaces/button.interface'

defineProps<{
  type?: ButtonType
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
