<script setup lang="ts">
import ToastMessage from '@/components/ToastMessage.vue'
import NavBarSecondary from '@/components/NavBarSecondary.vue'
import { isDark, preferredDark } from '@/composables'

const message = ref('')
const messageType = ref('')
const active = ref(false)

const assignMessage = (data: { message?: string; messageType?: string; active: boolean }) => {
  message.value = data.message || message.value
  messageType.value = data.messageType || messageType.value
  active.value = data.active
}

useHead({
  title: 'Register',
  meta: [
    { name: 'description', content: 'Lirest register page' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <NavBarSecondary class="w-1/5" flex-row justify-center absolute mt-4 top-0 right-0 />
  <main class="mt-6 mx-auto px-4 py-10 text-center flex-col items-center w-1/2" dark:bg-dark-600>
    <LirestLogo height="h-15" toUrl="/" />
    <BaseHorizontalLine width="75%" />
    <ToastMessage
      :class="messageType" :message-position="{ top: '-100px' }"
      :style="active ? { transform: 'translateY(100px)' } : ''"
    >
      {{ message }}
    </ToastMessage>
    <RegisterForm @register-toast-message="assignMessage" />
  </main>
</template>

<style scoped lang="scss">
main {
  position: relative;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>

<route lang="yaml">
meta:
  layout: auth
  requiresGuest: true
</route>
