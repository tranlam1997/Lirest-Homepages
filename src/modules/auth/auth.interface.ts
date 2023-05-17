export interface IRegisterForm {
  firstName: string
  lastName: string
  dateOfBirth: string
  email: string
  phoneNumber: string
  username: string
  password: string
  confirmPassword?: string
}

export interface IUtilities {
  emit?: any
  router?: any
}

export interface ILoginPayload {
  username: string
  email: string
  password: string
}

export interface ILoginResponseData {
  accessToken: string
  refreshToken: string
}

export interface IRegisterPayload {
  firstName: string
  lastName: string
  dateOfBirth: string
  email: string
  phoneNumber: string
  username: string
  password: string
}

export interface IRegisterResponseData {
  success: true
}

export interface IRefreshTokenResponseData extends ILoginResponseData {}

export interface IAccessTokenPayload {
  userId: string
  email: string
  username: string
  subjectId: number
  refreshTokenExpiresIn: number
}
