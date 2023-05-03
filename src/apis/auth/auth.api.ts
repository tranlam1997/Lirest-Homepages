import type { AxiosInstance } from 'axios'
import { AxiosError } from 'axios'
import type { ILoginResponseData } from '../../modules/auth/auth.interface'
import { AuthApiUrl } from './auth.url'
import type { IAxiosResponse, IResultResponse } from '@/shared/interfaces/axios-response'
import { ErrorReponse } from '@/shared/error-response'

export function AuthApis(axios: AxiosInstance) {
  return {
    async login(data: { email?: string; username?: string; password: string }):
    Promise<IAxiosResponse<{}> | IAxiosResponse<ILoginResponseData> | IResultResponse<{}>> {
      try {
        const result = await axios.post(AuthApiUrl.login, data)
        return result
      }
      catch (err) {
        if (err instanceof AxiosError)
          return err.response as IAxiosResponse<{}>

        return ErrorReponse(JSON.stringify(err))
      }
    },

    async refreshToken(refreshToken: string) {
      try {
        const result = await axios.post(AuthApiUrl.refreshToken, { refreshToken })
        return result
      }
      catch (err: AxiosError | unknown) {
        if (err instanceof AxiosError)
          return err.response

        throw err
      }
    },
  }
}
