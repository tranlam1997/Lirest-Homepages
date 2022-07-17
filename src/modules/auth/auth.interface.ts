import type { Store } from 'pinia'

export interface IRegisterForm {
  firstname: string
  lastname: string
  dateOfBirth: string
  email: string
  phoneNumber: string
  username: string
  password: string
  confirmPassword: string
}

export interface ILogin {
  loginData: ILoginData
  authStore: IAuthStore
  emitEvent: any
  vueRouter: any
}

export interface ILoginData {
  email: string
  password: string
}

export type IAuthStore = Store<'authId', {
  userInfos: never[]
}, {}, {
  login(email: string, password: string): Promise<any>
}>
