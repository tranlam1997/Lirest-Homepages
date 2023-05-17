import type { AxiosResponse } from 'axios'
import { isAxiosSuccess } from '../../shared/interfaces/axios-response'
import type { IUserModel } from './user.interface'

import $api from '@/apis/api'

class UsersService {
  async getUserById(id: string) {
    const res: AxiosResponse<IUserModel | any> = await $api
      .getUserApis()
      .getUserById(id)

    if (isAxiosSuccess(res))
      return res.data

    return null
  }
}

export default new UsersService()
