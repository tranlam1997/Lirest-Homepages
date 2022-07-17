import type { Store } from 'pinia'

export interface ICreateUser {
  user: IUser
  userStore: IUserStore
  emitEvent: any
  vueRouter: any
}

export interface IUser {
  firstname: string
  lastname: string
  dateOfBirth: string
  email: string
  phoneNumber: string
  username: string
  password: string
}

export interface IUserRootState {
  users: IUser[]
}

export type IUserStore = Store<'userId', {
  users: never[]
}, {}, {
  registerUser(data: IUser): Promise<any>
}>
