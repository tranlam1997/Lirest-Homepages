import axios from 'axios'
import Auth from '../modules/auth/auth.api'
import User from '../modules/users/user.api'

class Api {
  [x: string]: any
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    })
    this.auth = Auth(this.axiosInstance)
    this.user = User(this.axiosInstance)
  }
}

export default new Api()
