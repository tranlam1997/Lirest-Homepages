import type { IResultResponse } from './interfaces/axios-response'

export function ErrorReponse(error: string): IResultResponse<{}> {
  return {
    statusCode: 5000,
    message: 'Server Error',
    data: {},
    error,
  }
}
