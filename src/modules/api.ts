import axios from 'axios'
import type { AxiosInstance } from 'axios'
import Auth from '../modules/auth/auth.api'
import User from '../modules/users/user.api'

class Api {
  [x: string]: any
  constructor() {
    this.axiosInstance = <AxiosInstance>axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    })
    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        const { accessToken } = JSON.parse(localStorage.getItem('userInfo') || '{}')
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
    this.auth = Auth(this.axiosInstance)
    this.user = User(this.axiosInstance)
  }
}

export default new Api()
