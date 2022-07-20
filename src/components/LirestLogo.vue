<script setup lang="ts">
import { isDark } from '@/composables'

defineProps<{
  height: number
}>()
</script>

<template>
  <div class="w-auto ">
    <router-link to="/">
      <img v-if="isDark" src="../assets/img/header/Lirest-white.png" alt="Lirest logo dark mode" :class="`h-${height}`">
      <img v-if="!isDark" src="../assets/img/header/Lirest-black.png" alt="Lirest logo" :class="`h-${height}`">
    </router-link>
  </div>
</template>

<style scoped>
</style>
