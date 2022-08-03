<script setup lang="ts">
defineProps<{
  labelName: string
  labelContent: string
  errorDetail: string
  value: string
}>()
</script>

<template>
  <div flex-row gap-5>
    <BaseLabel p-2 class="basis-1/4" text-start self-center :name="labelName" :content="labelContent" />
    <div text-start self-center>
      <p v-if="true">
        {{ value }}
      </p>
      <slot v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
