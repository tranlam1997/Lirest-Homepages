<script setup lang="ts">
import type { ButtonType } from './interfaces/button.interface'

defineProps<{
  type?: ButtonType
  name?: string
  value?: string
  content?: string
}>()
</script>

<template>
  <button :type="type" :name="name" :value="value">
    {{ content }}
  </button>
</template>

<style scoped>

</style>
