<script setup lang="ts">
</script>

<template>
  <div sticky top-50>
    <NavBarSticky class="w-1/5" flex-col items-end absolute right-20 />
  </div>
  <TheHeader />
  <nav flex-row class="middle">
    <NavBarMain />
    <SlideShow />
  </nav>
  <TheFooter />
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
  requiresGuest: true
</route>
