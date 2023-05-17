export interface IUserApi {
  getUserById(id: string): Promise<any>
}
