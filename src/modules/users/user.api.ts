import type { AxiosError, AxiosInstance } from 'axios'
import type { IUser } from './user.interface'

export default (axios: AxiosInstance) => ({
  async createUser(user: IUser) {
    return axios.post('/users', user).catch((err: AxiosError) => err.response)
  },
})
