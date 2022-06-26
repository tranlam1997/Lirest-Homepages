<script lang="ts" setup>
</script>

<template>
  <div flex-col items-center>
    <div
      class="logo"
      bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 to-yellow-500 flex-row w-full justify-around
    >
      <LoginButton />
      <LirestLogo />
      <RegisterButton />
    </div>
    <nav w-full flex-row justify-items-start mt-4>
      <Navigator />
      <SlideShow />
    </nav>
  </div>
</template>

<style scoped>
nav {
  height: 400px;
}

.logo {
  background-image: linear-gradient(to right, #92ffc0, #002661);
}
</style>

