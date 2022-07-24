export interface IAuthApi {
  login(data: { email: string; password: string }): Promise<any>
}
