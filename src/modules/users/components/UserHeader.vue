<script setup>

</script>

<template>
  <div class="user-header" flex-row justify-between gap-10 bg-white dark:bg-dark>
    <LirestLogo height="11" grow />
    <span self-center>{{ 'Hi Lam' }}</span>
    <UserSettingLogo self-center>
      <UserMiniMenu absolute top-25 right-15 />
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

