<script setup lang="ts">
import type { Emitter } from 'mitt'
import { LocalStorage } from '@/common/helpers/local-storage'
import { UserInfo } from '@/modules/users/user.constant'
import type { MittEvents } from '@/plugins/mitt'
import type { IUserInfoLocalStorage } from '@/shared/interfaces/local-storage'

const { username, userId } = LocalStorage.getObjectItem<IUserInfoLocalStorage>(UserInfo)
const router = useRouter()
router.push(`/users/${userId}`)
const emitter = <Emitter<MittEvents>>inject('emitter')
const messageType = ref('')
const toastActive = ref(false)
const message = ref('')

emitter.on('toastMessage', (value) => {
  messageType.value = value.messageType
  toastActive.value = value.active
  message.value = value.message
  setTimeout(() => {
    toastActive.value = false
  }, 3000)
})
</script>

<template>
  <div>
    <ToastMessage
      :class="messageType"
      :message-position="{ left: '-500px', top: '150px' }"
      :style="toastActive ? { transform: 'translateX(500px)' } : ''"
    >
      {{ message }}
    </ToastMessage>
    <UserHeader
      ct-user-header-box-shadow
      :username="username"
    />
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  layout: user
  requiresAuth: true
</route>
