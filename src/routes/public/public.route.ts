export const PublicRoute = {
  basePath: '/',
  home() {
    return this.basePath;
  },
  login() {
    return `${this.basePath}login`;
  },
  register() {
    return `${this.basePath}register`;
  },
  about() {
    return `${this.basePath}about`;
  },
};
