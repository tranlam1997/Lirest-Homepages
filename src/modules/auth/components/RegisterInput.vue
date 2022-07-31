<script setup lang="ts">
import type { InputEmitEvents } from '@/components/enums/input.enum'

defineProps<{
  labelContent?: string
  labelName?: string
  errorDetail: string
}>()

defineEmits<{
  (e: InputEmitEvents.INPUT_EVENT): void
}>()
</script>

<template>
  <div>
    <BaseLabel self-start :name="labelName" :content="labelContent" />
    <slot name="input" />
    <AuthErrorMessage :error-detail="errorDetail" />
    <slot />
  </div>
</template>

<style scoped>

</style>
