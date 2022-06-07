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
  <Login />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
