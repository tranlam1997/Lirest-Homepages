<script setup lang="ts">
const selectLocaleStatus = ref(false)

function changeSelectLocaleStatus() {
  selectLocaleStatus.value = !selectLocaleStatus.value
}
</script>

<template>
  <nav

    gap-3 text-xl
  >
    <IconHome />
    <IconToggleDarkMode />
    <IconLocale @click.prevent="changeSelectLocaleStatus()" />
    <InputSelectLocale :active="selectLocaleStatus" />
    <IconAbout />
    <IconGithub />
  </nav>
</template>

<style scoped lang="scss"></style>
