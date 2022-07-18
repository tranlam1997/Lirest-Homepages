<script setup lang="ts">
defineProps<{
  content: string
}>()
const active = ref(true)
const toggleContent = () => {
  active.value = !active.value
}
</script>

<template>
  <div absolute>
    <div
      v-if="active" class="i-fa-regular:eye" cursor-pointer @click.prevent="toggleContent"
      @click="$emit('toggleContent', 'text')"
    />
    <div
      v-if="!active" class="i-fa-regular:eye-slash" cursor-pointer @click.prevent="toggleContent"
      @click="$emit('toggleContent', 'password')"
    />
  </div>
</template>

<style scoped lang="scss">
</style>
