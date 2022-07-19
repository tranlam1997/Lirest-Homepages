<script setup lang="ts">
import { isDark } from '@/composables'
</script>

<template>
  <div w-auto>
    <router-link to="/">
      <img v-if="isDark" src="../assets/img/personal-logo.png" alt="Personal logo dark mode" h-12>
      <img v-if="!isDark" src="../assets/img/personal-logo.png" alt="Personal logo light mode" h-12>
    </router-link>
  </div>
</template>

<style scoped>
</style>
