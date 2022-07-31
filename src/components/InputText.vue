<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { InputEmitEvents } from './enums/input.enum'
defineProps<{
  inputName?: string
  inputPlaceholder?: string
  inputStyle?: string
}>()
defineEmits<{
  (e: InputEmitEvents.INPUT_EVENT): void
}>()
</script>

<template>
  <BaseInput :input-placeholder="inputPlaceholder" input-type="text" :input-name="inputName" :input-style="inputStyle" @input-change="$emit(InputEmitEvents.INPUT_EVENT)" />
</template>

<style scoped>
</style>
