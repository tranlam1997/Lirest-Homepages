import type { AxiosResponse } from 'axios'
import { UserInfo } from '../users/user.constant'
import type { IAxiosResponse, IResultResponse } from '../../shared/interfaces/axios-response'
import type {
  ILoginPayload,
  ILoginResponseData,
  IRefreshTokenResponseData,
  IRegisterPayload,
  IRegisterResponseData,
  IUtilities,
} from './auth.interface'
import { decodeToken } from '@/common/helpers/token'
import { LocalStorage } from '@/common/helpers/local-storage'
import {
  ToastMessageEvent,
  ToastMessageType,
} from '@/common/messages/toast-message/messages.enum'
import { ToastMessage } from '@/common/messages/toast-message/messages'
import { UserRoute } from '@/routes/auth/user/user.route'
import $api from '@/apis/api'
import { isAxiosSuccess } from '@/shared/interfaces/axios-response'
import { PublicRoute } from '@/routes/public/public.route'

class AuthService {
  async login(data: ILoginPayload, utilities: IUtilities) {
    const res = await $api
      .getAuthApis()
      .login(data)
    const { emit, router } = utilities

    if (isAxiosSuccess<ILoginResponseData>(res)) {
      emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
        message: ToastMessage.LoginSuccess,
        messageType: ToastMessageType.SUCCESS,
        active: true,
      })

      const tokenInfo = decodeToken(res.data.data.accessToken)

      LocalStorage.setObjectItem(UserInfo, {
        userId: tokenInfo.userId,
        username: tokenInfo.username,
        accessToken: res.data.data.accessToken,
        refreshToken: res.data.data.refreshToken,
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

    emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
      message: ToastMessage.LoginFailed,
      messageType: ToastMessageType.ERROR,
      active: true,
    })
    setTimeout(() => {
      emit(ToastMessageEvent.LOGIN_TOAST_MESSAGE, {
        active: false,
      })
    }, 2000)
  }

  async register(payload: IRegisterPayload, utilities: IUtilities) {
    const res = await $api.getAuthApis().register(payload)
    const { emit, router } = utilities

    if (!isAxiosSuccess<IRegisterResponseData>(res)) {
      emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
        message: (res as IAxiosResponse<{}>).data?.message
        || (res as IResultResponse<{}>).error
        || ToastMessage.RegisterFailed,
        messageType: ToastMessageType.ERROR,
        active: true,
      })
      setTimeout(() => {
        emit(ToastMessageEvent.REGISTER_TOAST_MESSAGE, {
          active: false,
        })
      }, 3000)
      return
    }
    console.log('here')
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

  async refreshToken(refreshToken: string) {
    const res: AxiosResponse<IRefreshTokenResponseData | any> = await $api
      .getAuthApis()
      .refreshToken(refreshToken)

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
