import type { AxiosError, AxiosInstance } from 'axios'

export default (axios: AxiosInstance) => ({
  async login(email: string, password: string) {
    return await axios.post('/auth/login', { email, password }).catch((error: AxiosError) => error.response)
  },
})
