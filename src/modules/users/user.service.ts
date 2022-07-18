import type { ICreateUser } from './user.interface'

class UsersService {
  async createUser(data: ICreateUser) {
    const res = await data.userStore.registerUser({
      firstname: data.user.firstname,
      lastname: data.user.lastname,
      dateOfBirth: data.user.dateOfBirth,
      email: data.user.email,
      phoneNumber: data.user.phoneNumber,
      username: data.user.username,
      password: data.user.password,
    })

    if (res && res.status === 201) {
      data.emitEvent('toastMessage', {
        message: 'Successfully registered',
        messageType: 'success',
        active: true,
      })
      setTimeout(() => {
        data.emitEvent('toastMessage', {
          active: false,
        })
        data.vueRouter.push('/login')
      }, 3000)
    }
    else {
      data.emitEvent('toastMessage', {
        message: res.data?.message,
        messageType: 'error',
        active: true,
      })
      setTimeout(() => {
        data.emitEvent('toastMessage', {
          active: false,
        })
      }, 3000)
    }
  }
}

export default new UsersService()
