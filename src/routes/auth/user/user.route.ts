export const UserRoute = {
  basePath: '/users',
  home(id: string) {
    return `${this.basePath}/${id}`
  },
}
