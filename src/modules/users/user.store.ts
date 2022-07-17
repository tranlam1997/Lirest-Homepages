import $api from '../api'
import type { IUser } from './user.interface'

export const useUserStore = defineStore('userId', {
  state: () => {
    return {
      users: [],
    }
  },

  actions: {
    async registerUser(data: IUser) {
      return $api.user.createUser(data)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
