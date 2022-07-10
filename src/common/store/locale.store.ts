export const useLocaleStore = defineStore('localeId', {
  state: () => ({
    currentLocale: 'en',
  }),
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLocaleStore, import.meta.hot))
