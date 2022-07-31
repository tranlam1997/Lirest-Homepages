import type { AxiosResponse } from 'axios'
import type { IUtilities } from '../auth/auth.interface'
import type { ICreateUserDto, IUserModel } from './user.interface'
import { ToastMessageEvent, ToastMessageType } from '@/common/messages/toast-message/messages.enum'
import { ToastMessage } from '@/common/messages/toast-message/messages'
import { PublicRoute } from '@/routes/public/public.route'
import $api from '@/apis/api'

class UsersService {
  async createUser(data: ICreateUserDto, utilities: IUtilities) {
    const res = await $api.getUser().createUser(data)
    const router = useRouter()
    const { emit } = utilities

    if (res && res.status === 201) {
      emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
        message: ToastMessage.RegisterSuccess,
        messageType: ToastMessageType.SUCCESS,
        active: true,
      })
      setTimeout(() => {
        emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
          active: false,
        })
        router.push(PublicRoute.login())
      }, 3000)
    }
    else {
      emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
        message: res.data?.message,
        messageType: ToastMessageType.ERROR,
        active: true,
      })
      setTimeout(() => {
        emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
          active: false,
        })
      }, 3000)
    }
  }

  async getUserById(id: string) {
    const res: AxiosResponse<IUserModel | any> = await $api.getUser().getUserById(id)

    if (res && res.status === 200)
      return res.data

    return null
  }
}

export default new UsersService()
