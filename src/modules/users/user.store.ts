import $api from '../api'
import type User from './user.model'

export const useUserStore = defineStore('userId', {
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },

  actions: {
    async registerUser(data: User) {
      const res = await $api.user.createUser(data)
      console.log(res)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
