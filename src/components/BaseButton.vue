<script setup lang="ts">
import type { ButtonType } from './interfaces/button.interface'

defineProps<{
  type?: ButtonType
  name?: string
  value?: string
}>()
</script>

<template>
  <button :type="type" :name="name" :value="value">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  border: none;
  background-color: green;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #093f09;
  }
}
</style>
