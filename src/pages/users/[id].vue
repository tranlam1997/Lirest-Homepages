<script setup lang="ts">
import { LocalStorage } from '@/common/helpers/local-storage.helper'
import type { IUserInfoLocalStorage } from '@/common/interfaces/local-storage.interface'
import { UserInfo } from '@/modules/users/user.constant'

defineProps<{
  id: string
}>()
const userInfo = LocalStorage.getObjectItem<IUserInfoLocalStorage>(UserInfo)
</script>

<template>
  <UserHeader ct-user-header-box-shadow :username="userInfo.username" />
</template>

<style lang="scss" scoped>
</style>

<route lang="yaml">
meta:
  requiresAuth: true
</route>
