<script setup lang="ts">
defineProps<{
  labelName: string
  labelContent: string
  errorDetail: string
  value: string
  [k: string]: any
}>()
</script>

<template>
  <div
    flex-row
    gap-5
  >
    <BaseLabel
      class="basis-1/4"
      self-center p-2 text-start
      :name="labelName"
      :content="labelContent"
    />
    <div
      self-center text-start
    >
      <p v-if="true">
        {{ value }}
      </p>
      <slot v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
