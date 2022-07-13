export const useAuthStore = defineStore('authId', {
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },

  getters: {

  },

  actions: {

  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
