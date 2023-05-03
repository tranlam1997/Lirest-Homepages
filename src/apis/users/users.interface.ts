import type { ICreateUserDto } from '@/modules/users/user.interface'

export interface IUserApi {
  createUser(data: ICreateUserDto): Promise<any>
  getUserById(id: string): Promise<any>
}
