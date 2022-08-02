<script setup lang="ts">
defineProps<{
  labelName: string
  labelContent: string
  errorDetail: string
  value: string
}>()
</script>

<template>
  <div flex-row gap-4>
    <BaseLabel class="basis-1/5" text-start self-center :name="labelName" :content="labelContent" />
    <div flex-1 flex-col>
      <p self-start v-if="true">{{ value }}</p>
      <slot v-if="false" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
