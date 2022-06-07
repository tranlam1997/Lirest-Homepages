<script lang="ts" setup>
</script>

<template>
  <div flex-col border="1 red-700" items-center>
    <div
      bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-yellow-500 flex-row w-full justify-around
      border="2 gray-200"
    >
      <LoginButton />
      <LirestLogo />
      <RegisterButton />
    </div>
    <nav w-full flex-row justify-between>
      <Navigator />
      <SlideShow />
    </nav>
  </div>
</template>

<style scoped>
nav {
  height: 400px;
}
</style>

