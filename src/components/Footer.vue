<script setup lang="ts">
import { toggleDark } from '@/composables'
import { convertLocaleCodeToLanguage } from '@/common/helpers/locale.helper'

const { t, availableLocales, locale } = useI18n()
const selectedLocale = ref('')
const locales = ref(availableLocales)

const convertToSpecificLanguage = (language: string) => {
  if (language)
    return convertLocaleCodeToLanguage(language)
  return 'English'
}

watch(selectedLocale, async (newSelectedLocale, oldSelectedLocale) => {
  locale.value = locales.value[locales.value.indexOf(newSelectedLocale)]
  locales.value = [...locales.value.filter(l => l !== newSelectedLocale), oldSelectedLocale].filter(item => item)
})
</script>

<template>
  <nav text-xl mt-6 flex-row justify-center>
    <RouterLink flex-row icon-btn mx-2 to="/" :title="t('button.home')">
      <div i-dashicons:admin-home />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none" flex-row :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a icon-btn mx-2 flex-row :title="t('button.toggle_langs')">
      <div i-carbon-language mr-1 />
      <select v-model="selectedLocale" text-xs>
        <option disabled :value="selectedLocale">{{ convertToSpecificLanguage(selectedLocale) }}
        </option>
        <option v-for="(locale, index) in locales" :key="`${locale}-${index}`" :value="locale">
          {{ convertToSpecificLanguage(locale) }}
        </option>
      </select>
    </a>

    <RouterLink icon-btn mx-2 flex-row to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a icon-btn mx-2 flex-row rel="noreferrer" href="https://github.com/tranlam1997" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>

<style scoped lang="scss">
</style>
