import type { AxiosError, AxiosInstance } from 'axios'
import { AuthApiUrl } from './auth-api.url'

export function AuthApi(axios: AxiosInstance) {
  return {
    async login(data: { email: string; password: string }) {
      return axios
        .post(AuthApiUrl.login, data)
        .catch((error: AxiosError) => error.response)
    },

    async refreshToken(refreshToken: string) {
      return axios({
        method: 'post',
        url: AuthApiUrl.refreshToken,
        data: {
          refreshToken,
        },
      }).catch((error: AxiosError) => error.response)
    },
  }
}
