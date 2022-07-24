export const UserApiUrl = {
  baseUrl: '/users',
  getUserById(id: string) {
    return `${this.baseUrl}/${id}`
  },
}
