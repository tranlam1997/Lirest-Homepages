<script setup lang="ts">
import { isDark } from '@/composables'
</script>

<template>
  <div class="w-auto m-4 p-2">
    <router-link to="/">
      <img v-if="isDark" src="../assets/img/header/Lirest-white.png" alt="Lirest logo dark mode" h-15>
      <img v-if="!isDark" src="../assets/img/header/Lirest-black.png" alt="Lirest logo" h-15>
    </router-link>
  </div>
</template>

<style scoped>
</style>
