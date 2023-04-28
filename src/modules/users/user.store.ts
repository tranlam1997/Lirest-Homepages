import type { IUtilities } from '../auth/auth.interface'
import type { ICreateUserDto, IUserModel } from './user.interface'
import userService from './user.service'

export const useUserStore = defineStore('userId', {
  state: () => {
    return {
      userInfo: {} as IUserModel,
    }
  },

  actions: {
    async createUser(data: ICreateUserDto, utilities: IUtilities) {
      return userService.createUser(data, utilities)
    },
    async getUserById(id: string) {
      return userService.getUserById(id)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
