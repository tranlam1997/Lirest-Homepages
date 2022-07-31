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
  refreshToken?: {
    id: string
    token: string
    expiresIn: number
    createdAt: string
    updatedAt: string
  }
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

export interface IUserInfo {
  userId: string
  username: string
  email: string
}
