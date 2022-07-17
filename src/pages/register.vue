<script setup lang="ts">
import ToastMessage from '@/components/ToastMessage.vue'

const message = ref('')
const messageType = ref('')
const active = ref(false)

const assignMessage = (data: { message?: string; messageType?: string; active: boolean }) => {
  message.value = data.message || message.value
  messageType.value = data.messageType || messageType.value
  active.value = data.active
}
</script>

<template>
  <ToastMessage :class="messageType" :message-position="{ top: '-100px' }" :style="active ? { transform: 'translateY(100px)' } : ''">
    {{ message }}
  </ToastMessage>
  <RegisterForm @toast-message="assignMessage" />
</template>

<style scoped lang="scss">
</style>

<route lang="yaml">
meta:
  layout: auth
</route>
