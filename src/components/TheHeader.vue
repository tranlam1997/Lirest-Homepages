<script lang="ts" setup>
</script>

<template>
  <div class="header" flex-row justify-center items-center relative w-full>
    <LirestLogo height="h-15" toUrl="/" />
    <div flex-row gap-2 absolute right-10 top-10>
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
