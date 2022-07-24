import type { AxiosError, AxiosInstance } from 'axios'
import { UserApiUrl } from './user-api.url'
import type { ICreateUserDto } from '@/modules/users/user.interface'

export const UserApi = (axios: AxiosInstance) => ({
  async createUser(data: ICreateUserDto): Promise<any> {
    return axios.post(UserApiUrl.baseUrl, data).catch((err: AxiosError) => err.response)
  },

  async getUserById(id: string): Promise<any> {
    return axios.get(UserApiUrl.getUserById(id)).catch((err: AxiosError) => err.response)
  },
})
