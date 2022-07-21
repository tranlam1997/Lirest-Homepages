<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/auth.store'

defineProps<{
  active: boolean
}>()

const authStore = useAuthStore()
const router = useRouter()
const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <div v-if="active" class="user-mini-menu" dark:text-dark>
    <RouterLink to="/">
      Profile
    </RouterLink>
    <RouterLink to="/">
      Settings
    </RouterLink>
    <button @click.prevent="logout">
      Log out
    </button>
  </div>
</template>

<style scoped>
.user-mini-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}
</style>
