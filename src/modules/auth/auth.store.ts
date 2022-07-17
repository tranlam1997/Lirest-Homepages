import $api from '../api'

export const useAuthStore = defineStore('authId', {
  state: () => {
    return {
      userInfos: [],
    }
  },

  getters: {

  },

  actions: {
    async login(email: string, password: string) {
      return $api.auth.login(email, password)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
