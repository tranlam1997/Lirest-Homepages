import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { LocalStorage } from '@/common/helpers/local-storage.helper'
import { UserInfo } from '@/modules/users/user.constant'

export const checkAuth = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const userInfo = LocalStorage.getObjectItem(UserInfo)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!userInfo.accessToken) {
      next({
        path: '/login',
      })
    }
    else {
      if (Date.now() >= userInfo.refreshTokenExpiresIn * 1000) {
        LocalStorage.removeItem(UserInfo)
        next({
          path: '/login',
        })
      }
      else {
        next()
      }
    }
  }
  else {
    next()
  }
}
