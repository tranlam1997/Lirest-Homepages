import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { checkAuth } from './middlewares/check-auth'
import { checkGuest } from './middlewares/check-guest'
import installDirectives from './directives/click-outside'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

library.add(fas)
library.add(fab)
library.add(far)
dom.watch()

const routes = setupLayouts(generatedRoutes)
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // use element plus component library
    ctx.app.use(ElementPlus)
    ctx.router.beforeEach(
      (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext,
      ) => {
        checkAuth(to, from, next)
      },
    )

    ctx.router.beforeEach(
      (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext,
      ) => {
        checkGuest(to, from, next)
      },
    )

    installDirectives(ctx.app)
    ctx.app.component('font-awesome-icon', FontAwesomeIcon)
    Object.values(import.meta.globEager('./plugins/*.ts')).forEach(i =>
      i.install?.(ctx),
    )
  },
)
