<script setup lang="ts">
defineProps<{
  labelName: string
  labelContent: string
  errorDetail: string
  value: string
}>()
</script>

<template>
  <div border="1 red" flex-row gap-4>
    <BaseLabel flex-1 self-center :name="labelName" :content="labelContent" />
    <div flex-1 flex-col>
      <p self-start v-if="false">{{ value }}</p>
      <slot v-if="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
