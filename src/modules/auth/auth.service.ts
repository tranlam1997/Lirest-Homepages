import type { ILogin } from './auth.interface'

class AuthService {
  async login(data: ILogin) {
    const res = await data.authStore.login(
      data.loginData.email,
      data.loginData.password,
    )

    if (res && res.status === 200) {
      data.emitEvent('loginToastMessage', {
        message: 'Successfully logged in',
        messageType: 'success',
        active: true,
      })
      setTimeout(() => {
        data.emitEvent('loginToastMessage', {
          active: false,
        })
        data.vueRouter.push('/')
      }, 3000)
    }
    else {
      data.emitEvent('loginToastMessage', {
        message: res.data.message,
        messageType: 'error',
        active: true,
      })
      setTimeout(() => {
        data.emitEvent('loginToastMessage', {
          active: false,
        })
      }, 3000)
    }
  }
}

export default new AuthService()
