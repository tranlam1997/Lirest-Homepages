<script setup lang="ts">
defineProps<{
  username: string
}>()
</script>

<template>
  <div
    class="user-header"

    flex-row items-center justify-between gap-10 bg-white dark:bg-dark
  >
    <LirestLogo height="h-10" />
    <div
      flex-row
      gap-12
    >
      <div
        flex-row
        gap-2
      >
        <span self-center>{{ `Hi, ${username}` }}</span>
        <UserNotificationLogo
          self-end
          text-xl
        />
      </div>
      <UserSettingLogo
        v-slot="props"
        self-center
      >
        <UserMiniMenu
          :active="props.isActive"

          absolute right-15 top-25 ct-user-mini-menu-box-shadow
        />
      </UserSettingLogo>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .user-header {
    height: 80px;
    border-radius: 5px;
    padding: 1rem;
  }
</style>
