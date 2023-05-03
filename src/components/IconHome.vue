<script setup lang="ts">
import { LocalStorage } from '@/common/helpers/local-storage'
import { UserInfo } from '@/modules/users/user.constant.js'

const { t } = useI18n()
const { userId } = LocalStorage.getObjectItem(UserInfo)
</script>

<template>
  <RouterLink
    :to="userId ? `/users/${userId}` : '/'"
    :title="t('button.home')"
    flex-row text-gray-900 icon-btn dark:text-gray-100
  >
    <div i-dashicons:admin-home />
  </RouterLink>
</template>

<style scoped></style>
