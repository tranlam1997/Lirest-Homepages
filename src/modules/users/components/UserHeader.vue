<script setup lang="ts">
import UserNotificationLogo from './UserNotificationLogo.vue'
defineProps<{
  username: string
}>()
</script>

<template>
  <div class="user-header" flex-row justify-between items-center gap-10 bg-white dark:bg-dark>
    <LirestLogo height="h-10" />
    <div flex-row gap-12>
      <div flex-row gap-2>
        <span self-center>{{ `Hi, ${username}` }}</span>
        <UserNotificationLogo self-end text-xl />
      </div>
      <UserSettingLogo
        v-slot="props"
        self-center
      >
        <UserMiniMenu :active="props.isActive" ct-user-mini-menu-box-shadow absolute top-25 right-15 />
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
