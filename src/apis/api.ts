import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { IUserApi as IUserApis } from './users/users.interface'
import type { IAuthApi as IAuthApis } from './auth/auth.interface'
import { AuthApis } from './auth/auth.api'
import { UserApis } from './users/users.api'
import { LocalStorage } from '@/common/helpers/local-storage'
import { UserInfo } from '@/modules/users/user.constant'
import { useAuthStore } from '@/modules/auth/auth.store'

class Api {
  private readonly authApis: IAuthApis
  private readonly userApis: IUserApis
  private readonly axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    })
    // Send token in every request
    this.axiosInstance.interceptors.request.use((config: any) => {
      const { accessToken } = LocalStorage.getObjectItem(UserInfo)
      if (accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

      return config
    })
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      async (error: any) => {
        const authStore = useAuthStore()
        const router = useRouter()
        const originalRequest = error.config
        if (
          error.response
          && error.response.status === 401
          && !originalRequest._retry
        ) {
          originalRequest._retry = true
          const { refreshToken } = LocalStorage.getObjectItem(UserInfo)
          const accessToken = await authStore.refreshToken(refreshToken)
          if (!accessToken) {
            authStore.logout()
            router.push('/login')
            return Promise.reject(error)
          }
          axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
          return this.axiosInstance(originalRequest)
        }

        return Promise.reject(error)
      },
    )
    this.authApis = AuthApis(this.axiosInstance)
    this.userApis = UserApis(this.axiosInstance)
  }

  getAuthApis() {
    return this.authApis
  }

  getUserApis() {
    return this.userApis
  }
}

export default new Api()
