export interface IAuthApi {
  login(data: { email: string; password: string }): Promise<any>
  refreshToken(refreshToken: string): Promise<any>
}
