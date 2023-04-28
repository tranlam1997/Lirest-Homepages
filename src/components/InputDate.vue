<script setup lang="ts">
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
  <BaseInput
    :input-placeholder="inputPlaceholder || 'DD-MM-YYYY'"
    input-type="date"
    :input-name="inputName"
    :input-style="inputStyle"
    @input-change="$emit(InputEmitEvents.INPUT_EVENT)"
  >
    <span hidden />
  </BaseInput>
</template>

<style scoped></style>
