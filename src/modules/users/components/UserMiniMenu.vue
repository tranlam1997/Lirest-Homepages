<script setup lang="ts">
const isActive = ref(true)
</script>

<template>
  <div v-if="isActive" class="user-mini-menu">
    <RouterLink to="/">
      Profile
    </RouterLink>
    <RouterLink to="/">
      Settings
    </RouterLink>
    <RouterLink to="/">
      Log out
    </RouterLink>
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
