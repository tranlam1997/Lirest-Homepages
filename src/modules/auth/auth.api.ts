import type { AxiosInstance } from 'axios'

export default (axios: AxiosInstance) => ({
  login(email: string, password: string) {
    return axios.post('/auth/login', { email, password })
  },
})
