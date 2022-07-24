import type { ILoginData, IOptions } from './auth.interface'
import authService from './auth.service'

export const useAuthStore = defineStore('authId', {
  state: () => {
    return {
      userInfos: {},
      accessToken: '',
    }
  },

  getters: {

  },

  actions: {
    async login(data: ILoginData, options: IOptions) {
      return authService.login(data, options)
    },

    async logout() {
      authService.logout()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
