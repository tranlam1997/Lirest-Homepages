<script lang="ts" setup></script>

<template>
  <div
    class="header"

    relative w-full flex-row items-center justify-center
  >
    <LirestLogo height="h-15" />
    <div

      absolute right-10 top-10 flex-row gap-2
    >
      <LoginButton />
      <RegisterButton />
    </div>
  </div>
</template>

<style scoped>
  .header {
    background-image: linear-gradient(to right, #92ffc0, #002661);
    height: 120px;
  }
</style>
