<script setup lang="ts">
import { LocalStorage } from '@/common/helpers/local-storage.helper'
import { decodeToken } from '@/common/helpers/token.helper'
import type { IUserInfoLocalStorage } from '@/common/interfaces/local-storage.interface'
import { UserInfo } from '@/modules/users/user.constant'
import { UserRoute } from '@/routes/auth/user/user.route'
import { PublicRoute } from '@/routes/public/public.route'

onBeforeMount(() => {
  const { accessToken } = LocalStorage.getObjectItem<IUserInfoLocalStorage>(UserInfo)
  const tokenInfo = decodeToken(accessToken) as Record<string, any>
  const router = useRouter()
  router.push(tokenInfo.userId ? UserRoute.home(tokenInfo.userId) : PublicRoute.login())
})
</script>

<style lang="scss" scoped>

</style>
