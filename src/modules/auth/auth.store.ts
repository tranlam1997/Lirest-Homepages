import type { ILoginPayload, IRegisterPayload, IUtilities } from './auth.interface'
import authService from './auth.service'

export const useAuthStore = defineStore('authId', {
  state: () => {
    return {}
  },

  getters: {},

  actions: {
    async login(data: ILoginPayload, options: IUtilities) {
      return authService.login(data, options)
    },

    async register(payload: IRegisterPayload, utilities: IUtilities) {
      return authService.register(payload, utilities)
    },

    async refreshToken(refreshToken: string) {
      return authService.refreshToken(refreshToken)
    },

    async logout() {
      authService.logout()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
