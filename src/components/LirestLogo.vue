<script setup lang="ts">
import { isDark } from '@/composables'
import { LocalStorage } from '@/common/helpers/local-storage'
import { UserInfo } from '@/modules/users/user.constant.js'

defineProps<{
  height?: string
  toUrl?: string
}>()
const { userId } = LocalStorage.getObjectItem(UserInfo)
</script>

<template>
  <div class="w-auto">
    <router-link :to="userId ? `/users/${userId}` : '/'">
      <img
        v-if="isDark"
        src="../assets/img/header/Lirest-white.png"
        alt="Lirest logo dark mode"
        :class="height"
      >
      <img
        v-if="!isDark"
        src="../assets/img/header/Lirest-black.png"
        alt="Lirest logo"
        :class="height"
      >
    </router-link>
  </div>
</template>

<style scoped></style>
