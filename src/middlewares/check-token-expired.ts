import { PublicRoute } from '@/routes/public/public.route'

export const checkTokenExpired = (store: any) => {
  return async (to: any, from: any, next: any) => {
    const token = store.state.auth.token
    if (token) {
      const isExpired = await store.dispatch('auth/checkTokenExpired')
      if (isExpired) {
        store.dispatch('auth/logout')
        next({ path: PublicRoute.login })
      }
    }
    next()
  }
}
