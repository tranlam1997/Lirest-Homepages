import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { IUserApi } from './user/user-api.interface'
import type { IAuthApi } from './auth/auth-api.interface'
import { AuthApi } from './auth/auth-api'
import { UserApi } from './user/user-api'
import { LocalStorage } from '@/common/helpers/local-storage.helper'
import { UserInfo } from '@/modules/users/user.constant'

class Api {
  private readonly auth: IAuthApi
  private readonly user: IUserApi
  private readonly axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    })
    // Send token in every request
    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        const { accessToken } = LocalStorage.getObjectItem(UserInfo)
        if (accessToken)
          config.headers.Authorization = `Bearer ${accessToken}`

        return config
      },
    )
    // this.axiosInstance.interceptors.response.use(
    //   (error: any) => {
    //     const originalRequest = error.config;
    //   }
    // )
    this.auth = AuthApi(this.axiosInstance)
    this.user = UserApi(this.axiosInstance)
  }

  getAuth() {
    return this.auth
  }

  getUser() {
    return this.user
  }
}

export default new Api()
