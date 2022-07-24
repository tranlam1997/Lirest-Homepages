<script setup lang="ts">
const active = ref(false)

const toggleLogo = () => {
  active.value = !active.value
}

const turnBackLogo = () => {
  active.value = false
}
</script>

<template>
  <div v-click-outside="() => { turnBackLogo() }" cursor-pointer @click="toggleLogo()">
    <div v-show="!active">
      <i class="fa-solid fa-bars fa-2x" />
    </div>
    <div v-show="active">
      <i class="fa-solid fa-bars fa-2x fa-rotate-90" />
    </div>
    <slot :is-active="active" />
  </div>
</template>

<style scoped lang="scss">
  .v-enter-active, .v-leave-active {
    transition: all 1s ease;
  }

 .v-enter, .v-leave-to {
    opacity: 0;
  }
</style>
