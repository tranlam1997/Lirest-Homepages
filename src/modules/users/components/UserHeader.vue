<script setup lang="ts">
const isActive = ref(false)

const username = localStorage.getItem('username')

const activeOrHiddenMenu = () => {
  isActive.value = !isActive.value
}

const hiddenUserMiniMenu = () => {
  isActive.value = false
}
</script>

<template>
  <div class="user-header" flex-row justify-between gap-10 bg-white dark:bg-dark>
    <LirestLogo height="h-15" grow />
    <span self-center>{{ username }}</span>
    <UserSettingLogo
      v-click-outside="() => { hiddenUserMiniMenu() }" self-center
      @toggle-user-mini-menu="activeOrHiddenMenu()"
    >
      <UserMiniMenu :active="isActive" absolute top-25 right-15 />
    </UserSettingLogo>
  </div>
</template>

<style lang="scss" scoped>
.user-header {
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}
</style>
