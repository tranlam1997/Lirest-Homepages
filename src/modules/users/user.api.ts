import type { AxiosInstance } from 'axios'
import type User from './user.model'

export default (axios: AxiosInstance) => ({
  createUser(user: User) {
    return axios.post('/users', user)
  },
})
