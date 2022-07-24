import jwtDecode from 'jwt-decode'
import type { IAccessTokenPayload } from '@/modules/auth/auth.interface'

export const decodeToken = (token: string): IAccessTokenPayload => {
  return jwtDecode(token)
}
