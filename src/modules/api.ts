import axios from 'axios'
import Auth from '../modules/auth/auth.api'
import User from '../modules/users/user.api'

class Api {
  [x: string]: any
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.LIREST_API_URL,
    })
    this.factories = {
      auth: Auth(this.axiosInstance),
      user: User(this.axiosInstance),
    }
  }
}

export default new Api()
