import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { LocalStorage } from '@/common/helpers/local-storage.helper'
import { UserInfo } from '@/modules/users/user.constant'

export const checkGuest = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const { accessToken } = LocalStorage.getObjectItem(UserInfo)
  if (to.matched.some(record => record.meta.requiresGuest)) {
    if (accessToken) {
      next({
        path: '/users',
      })
    }

    else { next() }
  }
  else {
    next()
  }
}

