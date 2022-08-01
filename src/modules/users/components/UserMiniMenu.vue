<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/auth.store'
import { PublicRoute } from '@/routes/public/public.route'

defineProps<{
  active: boolean
}>()

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const logout = () => {
  authStore.logout()
  router.push(PublicRoute.home())
}
</script>

<template>
  <div v-if="active" class="user-mini-menu" dark:text-dark>
    <RouterLink :to="`/users/${route.params.id}/profile`">
      Profile
    </RouterLink>
    <RouterLink to="/">
      Settings
    </RouterLink>
    <button w-full mt-2 mb-3 pt-2 border-t="1 black" @click.prevent="logout">
      Log out
    </button>
  </div>
</template>

<style scoped lang="scss">
.user-mini-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;

  & > a {
    display: block;
    width: 100%;
    padding: 0.5rem 2rem;

    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    &:hover {
      background-color: #DCDCDC;
    }
  }
}
</style>
