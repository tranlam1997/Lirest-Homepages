<script setup lang="ts">
const isSelectLocaleActive = ref(false)

const changeSelectLocaleStatus = () => {
  isSelectLocaleActive.value = !isSelectLocaleActive.value
}
const hiddenInputSelectedLocale = () => {
  isSelectLocaleActive.value = false
}
</script>

<template>
  <nav text-xl gap-3>
    <IconHome />
    <IconToggleDarkMode />
    <div v-click-outside="() => { hiddenInputSelectedLocale() }" flex-row justify-end gap-1 w-full>
      <InputSelectLocale :active="isSelectLocaleActive" />
      <IconLocale @click.prevent="changeSelectLocaleStatus()" />
    </div>
    <IconAbout />
    <IconGithub />
  </nav>
</template>

<style scoped lang="scss">
</style>
