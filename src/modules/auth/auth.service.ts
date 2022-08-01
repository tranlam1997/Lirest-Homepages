import type { AxiosResponse } from 'axios'
import { UserInfo } from '../users/user.constant'
import type { ILoginData, ILoginResponseData, IRefreshTokenResponseData, IUtilities } from './auth.interface'
import { decodeToken } from '@/common/helpers/token.helper'
import { LocalStorage } from '@/common/helpers/local-storage.helper'
import { ToastMessageEvent, ToastMessageType } from '@/common/messages/toast-message/messages.enum'
import { ToastMessage } from '@/common/messages/toast-message/messages'
import { UserRoute } from '@/routes/auth/user/user.route'
import $api from '@/apis/api'

class AuthService {
  async login(data: ILoginData, utilities: IUtilities) {
    const res: AxiosResponse<ILoginResponseData | any> = await $api.getAuth().login(data)
    const { emit, router } = utilities

    if (res && res.status === 200) {
      emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
        message: ToastMessage.LoginSuccess,
        messageType: ToastMessageType.SUCCESS,
        active: true,
      })

      const tokenInfo = decodeToken(res.data.accessToken)

      LocalStorage.setObjectItem(UserInfo, {
        userId: tokenInfo.userId,
        username: tokenInfo.username,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
        refreshTokenExpiresIn: tokenInfo.refreshTokenExpiresIn,
      })

      setTimeout(() => {
        emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
          active: false,
        })
        router.push(UserRoute.home(tokenInfo.userId))
      }, 2000)

      return res
    }
    else {
      emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
        message: res.data?.message || res.data,
        messageType: ToastMessageType.ERROR,
        active: true,
      })
      setTimeout(() => {
        emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
          active: false,
        })
      }, 2000)
    }
  }

  async refreshToken(refreshToken: string) {
    const res: AxiosResponse<IRefreshTokenResponseData | any> = await $api.getAuth().refreshToken(refreshToken)

    if (res && res.status === 200) {
      const { accessToken, refreshToken } = res.data
      LocalStorage.updateObjectItem(UserInfo, { accessToken, refreshToken })
      return accessToken
    }

    return null
  }

  logout() {
    LocalStorage.removeItem(UserInfo)
  }
}

export default new AuthService()
