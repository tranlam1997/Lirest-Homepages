<script setup lang="ts">
const selectLocaleStatus = ref(false)

const changeSelectLocaleStatus = () => {
  selectLocaleStatus.value = !selectLocaleStatus.value
}
</script>

<template>
  <nav text-xl gap-3>
    <IconHome />
    <IconToggleDarkMode />
    <div flex-row justify-end gap-1 w-full>
      <InputSelectLocale :active="selectLocaleStatus" />
      <IconLocale @click.prevent="changeSelectLocaleStatus()" />
    </div>
    <IconAbout />
    <IconGithub />
  </nav>
</template>

<style scoped lang="scss">
</style>
