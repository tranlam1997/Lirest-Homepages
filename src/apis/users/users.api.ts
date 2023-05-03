import { AxiosError } from 'axios'
import type { AxiosInstance } from 'axios'
import { UserApiUrl } from './users.url'
import type { ICreateUserDto } from '@/modules/users/user.interface'
import { ErrorReponse } from '@/shared/error-response'
import type { IAxiosResponse } from '@/shared/interfaces/axios-response'

export function UserApis(axios: AxiosInstance) {
  return {
    async createUser(data: ICreateUserDto): Promise<any> {
      return axios
        .post(UserApiUrl.baseUrl, data)
        .catch((err: AxiosError) => err.response)
    },

    async getUserById(id: string): Promise<any> {
      try {
        const result = await axios.get(UserApiUrl.getUserById(id))
        return result
      }
      catch (err) {
        if (err instanceof AxiosError)
          return err.response as IAxiosResponse<{}>

        return ErrorReponse(JSON.stringify(err))
      }
    },
  }
}
