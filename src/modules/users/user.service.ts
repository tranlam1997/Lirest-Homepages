import type { IOptions } from '../auth/auth.interface'
import type { ICreateUserDto } from './user.interface'
import { ToastMessageEvent, ToastMessageType } from '@/common/messages/toast-message/messages.enum'
import { ToastMessage } from '@/common/messages/toast-message/messages'
import { PublicRoute } from '@/routes/public/public.route'
import $api from '@/apis/api'

class UsersService {
  async createUser(data: ICreateUserDto, options: IOptions) {
    const res = await $api.getUser().createUser(data)

    if (res && res.status === 201) {
      options.emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
        message: ToastMessage.RegisterSuccess,
        messageType: ToastMessageType.SUCCESS,
        active: true,
      })
      setTimeout(() => {
        options.emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
          active: false,
        })
        options.router.push(PublicRoute.login())
      }, 3000)
    }
    else {
      options.emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
        message: res.data?.message,
        messageType: ToastMessageType.ERROR,
        active: true,
      })
      setTimeout(() => {
        options.emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
          active: false,
        })
      }, 3000)
    }
  }

  async getUserById(id: string) {
    const res = await $api.getUser().getUserById(id)
    return res.data
  }
}

export default new UsersService()
