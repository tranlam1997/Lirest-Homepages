import axios from 'axios'
import VueAxios from 'vue-axios'
import type { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(VueAxios, axios)
  app.provide('axios', app.config.globalProperties.axios)
}
