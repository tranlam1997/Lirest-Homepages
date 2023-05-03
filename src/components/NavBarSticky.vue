<script setup lang="ts">
defineProps<{
  navStyle: string
}>()
const isSelectLocaleActive = ref(false)

function changeSelectLocaleStatus() {
  isSelectLocaleActive.value = !isSelectLocaleActive.value
}
function hiddenInputSelectedLocale() {
  isSelectLocaleActive.value = false
}
</script>

<template>
  <div>
    <nav
      :class="navStyle"
      gap-3 text-xl
    >
      <IconHome />
      <IconToggleDarkMode />
      <div
       v-on-click-outside="hiddenInputSelectedLocale"
       w-full flex-row justify-end
      >
        <InputSelectLocale :active="isSelectLocaleActive" />
        <IconLocale @click.prevent="changeSelectLocaleStatus()" />
      </div>
      <IconAbout />
      <IconGithub />
    </nav>
  </div>
</template>

<style scoped lang="scss"></style>
