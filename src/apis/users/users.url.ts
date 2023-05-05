export const UserApiUrl = {
  baseUrl: '/api/v1/users',
  getUserById(id: string) {
    return `${this.baseUrl}/${id}`
  },
}
