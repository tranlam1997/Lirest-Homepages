import type { Store } from 'pinia'

export interface ICreateUser {
  user: IUser
  userStore: IUserStore
  emitEvent: any
  vueRouter: any
}

export interface IUserModel {
  id: string
  firstname: string
  lastname: string
  dateOfBirth: string
  email: string
  phoneNumber: string
  username: string
  password: string
  createdAt: string
  updatedAt: string
}

export interface ICreateUserDto {
  firstname: string
  lastname: string
  dateOfBirth: string
  email: string
  phoneNumber: string
  username: string
  password: string
}

export interface IUserRootState {
  users: IUserModel[]
}

export type IUserStore = Store<'userId', {
  users: never[]
}, {}, {
  registerUser(data: ICreateUserDto): Promise<any>
}>
