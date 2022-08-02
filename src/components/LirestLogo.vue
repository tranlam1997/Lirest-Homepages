<script setup lang="ts">
import { isDark } from '@/composables'

defineProps<{
  height: string
  toUrl: string
}>()
</script>

<template>
  <div class="w-auto">
    <router-link :to="toUrl">
      <img v-if="isDark" src="../assets/img/header/Lirest-white.png" alt="Lirest logo dark mode" :class="height">
      <img v-if="!isDark" src="../assets/img/header/Lirest-black.png" alt="Lirest logo" :class="height">
    </router-link>
  </div>
</template>

<style scoped>
</style>
