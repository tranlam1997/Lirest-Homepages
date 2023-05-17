import type { IUserModel } from './user.interface'
import userService from './user.service'

export const useUserStore = defineStore('userId', {
  state: () => {
    return {
      userInfo: {} as IUserModel,
    }
  },

  actions: {
    async getUserById(id: string) {
      return userService.getUserById(id)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
