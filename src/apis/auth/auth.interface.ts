import type { IAxiosResponse, IResultResponse } from '../../shared/interfaces/axios-response'
import type { ILoginResponseData, IRegisterPayload, IRegisterResponseData } from '@/modules/auth/auth.interface'

export interface IAuthApi {
  login(payload: { email?: string; username?: string; password: string }):
  Promise<IAxiosResponse<{}> | IAxiosResponse<ILoginResponseData> | IResultResponse<{}>>

  register(payload: IRegisterPayload): Promise<IAxiosResponse<{}> | IAxiosResponse<IRegisterResponseData> | IResultResponse<{}>>

  refreshToken(refreshToken: string): Promise<any>
}
