import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { LocalStorage } from '@/common/helpers/local-storage'
import { UserInfo } from '@/modules/users/user.constant'

export async function checkAuth(to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext) {
  const { accessToken, refreshTokenExpiresIn }
    = LocalStorage.getObjectItem(UserInfo)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!accessToken) {
      next({
        path: '/login',
      })
    }
    else {
      if (Date.now() >= refreshTokenExpiresIn * 1000) {
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
