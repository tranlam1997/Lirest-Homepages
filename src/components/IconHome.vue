<script setup lang="ts">
import { LocalStorage } from '@/common/helpers/local-storage.helper.js'
import { UserInfo } from '@/modules/users/user.constant.js'

const { t } = useI18n()
const { userId } = LocalStorage.getObjectItem(UserInfo)
</script>

<template>
  <RouterLink flex-row icon-btn :to="userId ? `/users/${userId}` : '/'" :title="t('button.home')" text-gray-900 dark:text-gray-100>
    <div i-dashicons:admin-home />
  </RouterLink>
</template>

<style scoped>

</style>
