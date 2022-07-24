import { UserInfo } from '../users/user.constant'
import type { ILoginData, IOptions } from './auth.interface'
import { decodeToken } from '@/common/helpers/token.helper'
import { LocalStorage } from '@/common/helpers/local-storage.helper'
import { ToastMessageEvent, ToastMessageType } from '@/common/messages/toast-message/messages.enum'
import { ToastMessage } from '@/common/messages/toast-message/messages'
import { UserRoute } from '@/routes/auth/user/user.route'
import $api from '@/apis/api'

class AuthService {
  async login(data: ILoginData, options: IOptions) {
    const res = await $api.getAuth().login(data)

    if (res && res.status === 200) {
      options.emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
        message: ToastMessage.LoginSuccess,
        messageType: ToastMessageType.SUCCESS,
        active: true,
      })

      const tokenInfo = decodeToken(res.data.accessToken)

      LocalStorage.setObjectItem(UserInfo, {
        userId: tokenInfo.userId,
        username: tokenInfo.username,
        email: tokenInfo.email,
        accessToken: res.data.accessToken,
      })

      setTimeout(() => {
        options.emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
          active: false,
        })
        options.router.push(UserRoute.home(tokenInfo.userId))
      }, 3000)

      return res
    }
    else {
      options.emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
        message: res.data?.message,
        messageType: ToastMessageType.ERROR,
        active: true,
      })
      setTimeout(() => {
        options.emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
          active: false,
        })
      }, 3000)
    }
  }

  logout() {
    LocalStorage.removeItem(UserInfo)
  }
}

export default new AuthService()
