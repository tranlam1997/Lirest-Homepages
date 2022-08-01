<script setup lang="ts">
import { LocalStorage } from '@/common/helpers/local-storage.helper'
import type { IUserInfoLocalStorage } from '@/common/interfaces/local-storage.interface'
import { UserInfo } from '@/modules/users/user.constant'
import { UserRoute } from '@/routes/auth/user/user.route'

const { userId } = LocalStorage.getObjectItem<IUserInfoLocalStorage>(UserInfo)
const router = useRouter()
router.push(UserRoute.home(userId))
</script>

<route lang="yaml">
meta:
  layout: user
  requiresAuth: true
</route>
