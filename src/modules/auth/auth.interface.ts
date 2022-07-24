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

export interface IOptions {
  emit: any
  router: any
}

export interface ILoginData {
  email: string
  password: string
}

export interface IAccessTokenPayload {
  userId: string
  username: string
  email: string
}
