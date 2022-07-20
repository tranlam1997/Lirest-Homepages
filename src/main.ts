import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import App from './App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
library.add(fas)
library.add(fab)
library.add(far)
dom.watch()

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    ctx.app.directive('click-outside', {
      mounted(el, binding) {
        el.clickOutsideEvent = function (event: any) {
          if (!(el === event.target || el.contains(event.target)))
            binding.value(event, el)
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      },
    })
    // install all modules under `modules/`
    ctx.app.component('font-awesome-icon', FontAwesomeIcon)
    Object.values(import.meta.globEager('./plugins/*.ts')).forEach(i => i.install?.(ctx))
  },
)
