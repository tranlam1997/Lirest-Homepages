<script setup lang="ts">
</script>

<template>
  <TheHeader />
  <nav flex-row class="middle">
    <NavBarMain />
    <SlideShow />
  </nav>
  <TheFooter />
  <NavBarSecondary />
</template>

<style scoped lang="scss">
.middle {
  height: 400px;
  width: 80%;
  margin: 2rem auto;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
