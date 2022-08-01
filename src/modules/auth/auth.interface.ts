export interface IRegisterForm {
  firstname: string
  lastname: string
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

export interface ILoginData {
  email: string
  password: string
}

export interface ILoginResponseData {
  accessToken: string
  refreshToken: string
}

export interface IRefreshTokenResponseData extends ILoginResponseData {}

export interface IAccessTokenPayload {
  userId: string
  username: string
  refreshTokenExpiresIn: number
}
