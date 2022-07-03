<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <nav w-full flex-row justify-items-start mt-4>
    <Navigator />
    <SlideShow />
  </nav>
</template>

<style scoped lang="scss">
  nav {
  height: 400px;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
