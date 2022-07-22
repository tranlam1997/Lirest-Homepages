<script setup lang="ts">
onBeforeMount(() => {
  console.log('onBeforeMount')
  const info = JSON.parse(localStorage.getItem('userInfo') || '{}')
  console.log('🚀 ~ file: users.vue ~ line 5 ~ onBeforeMount ~ id', info)

  // const router = useRouter()
  // router.push(id ? `/users/${id}` : '/login')
})
</script>

<template>
  <UserHeader />
</template>

<style lang="scss" scoped>
</style>

<route lang="yaml">
meta:
  requiresAuth: true
</route>
