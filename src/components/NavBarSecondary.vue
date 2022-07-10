<script setup lang="ts">
import { toggleDark } from '@/composables'
import { convertLocaleCodeToLanguage } from '@/common/helpers/locale.helper'
import { useLocaleStore } from '@/common/store/locale.store'

const { t, availableLocales, locale } = useI18n()
const userStore = useLocaleStore()
const selectedLocale = ref('')
const locales = ref(availableLocales)

const convertToSpecificLanguage = (language: string) => {
  if (language)
    return convertLocaleCodeToLanguage(language)
  return 'English'
}

onMounted(() => {
  selectedLocale.value = userStore.currentLocale
})

watch(selectedLocale, async (newSelectedLocale, oldSelectedLocale) => {
  userStore.$patch({ currentLocale: newSelectedLocale })
  locale.value = locales.value[locales.value.indexOf(newSelectedLocale)]
  locales.value = [...locales.value.filter(l => l !== newSelectedLocale), oldSelectedLocale].filter(item => item)
})
</script>

<template>
  <nav text-xl mt-6 flex-row justify-center>
    <RouterLink flex-row icon-btn mx-2 to="/" :title="t('button.home')" text-gray-900 dark:text-gray-100>
      <div i-dashicons:admin-home />
    </RouterLink>

    <button
      class="icon-btn mx-2 !outline-none" flex-row :title="t('button.toggle_dark')" text-gray-900
      dark:text-gray-100 @click="toggleDark()"
    >
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a mx-2 flex-row :title="t('button.toggle_langs')" text-gray-900 dark:text-gray-100>
      <div icon-btn i-carbon-language mr-1 />
      <select
        v-model="selectedLocale" text-xs dark:border="1 white" border="1 black" text-gray-900 dark:text-gray-100
        dark:bg-black
      >
        <option disabled :value="selectedLocale">{{ convertToSpecificLanguage(selectedLocale) }}
        </option>
        <option v-for="(locale, index) in locales" :key="`${locale}-${index}`" :value="locale">
          {{ convertToSpecificLanguage(locale) }}
        </option>
      </select>
    </a>

    <RouterLink icon-btn mx-2 flex-row to="/about" :title="t('button.about')" text-gray-900 dark:text-gray-100>
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a
      icon-btn mx-2 flex-row rel="noreferrer" href="https://github.com/tranlam1997" target="_blank" title="GitHub"
      text-gray-900 dark:text-gray-100
    >
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>

<style scoped lang="scss">
</style>
