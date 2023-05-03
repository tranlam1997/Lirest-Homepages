import type { IAxiosResponse, IResultResponse } from '../../shared/interfaces/axios-response'
import type { ILoginResponseData } from '@/modules/auth/auth.interface'

export interface IAuthApi {
  login(data: { email?: string; username?: string; password: string }):
  Promise<IAxiosResponse<{}> | IAxiosResponse<ILoginResponseData> | IResultResponse<{}>>

  refreshToken(refreshToken: string): Promise<any>
}
