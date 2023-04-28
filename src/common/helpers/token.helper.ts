import jwtDecode from 'jwt-decode'
import type { IAccessTokenPayload } from '@/modules/auth/auth.interface'

export function decodeToken(token: string): IAccessTokenPayload {
  return jwtDecode(token)
}
