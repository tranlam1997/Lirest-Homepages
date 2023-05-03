import type { AxiosResponse } from 'axios'

export interface IResultResponse<T = any> {
  statusCode: number
  message: string
  data: T
  error?: string
}

export interface IAxiosResponse<T = any> extends AxiosResponse<IResultResponse<T>> {}

export function isAxiosSuccess<T>(axiosResponse: any): axiosResponse is IAxiosResponse<T> {
  return (!!Object.keys(axiosResponse.data.data).length
   && typeof axiosResponse.data.error === 'undefined')
}
