import type { IOptions } from '../auth/auth.interface'
import type { ICreateUserDto } from './user.interface'
import userService from './user.service'

export const useUserStore = defineStore('userId', {
  state: () => {
    return {
      users: [],
    }
  },

  actions: {
    async createUser(data: ICreateUserDto, options: IOptions) {
      return userService.createUser(data, options)
    },
    async getUserById(id: string) {
      return userService.getUserById(id)
    },
  },

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
