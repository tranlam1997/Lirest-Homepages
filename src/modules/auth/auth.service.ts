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

      localStorage.setItem('userInfo', JSON.stringify({
        username: res.data.username,
        accessToken: res.data.accessToken,
      }))

      setTimeout(() => {
        data.emitEvent('loginToastMessage', {
          active: false,
        })
        data.vueRouter.push('/users')
      }, 3000)

      return res
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

  logout() {
    localStorage.removeItem('userInfo')
  }
}

export default new AuthService()
