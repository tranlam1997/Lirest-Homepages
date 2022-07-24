import type { AxiosError, AxiosInstance } from 'axios'
import { AuthApiUrl } from './auth-api.url'

export const AuthApi = (axios: AxiosInstance) => ({
  async login(data: { email: string; password: string }) {
    return axios.post(AuthApiUrl.login, data).catch((error: AxiosError) => error.response)
  },
})
