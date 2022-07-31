import type { Emitter } from 'mitt'
import mitt from 'mitt'
import type { UserModule } from '@/types'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type MittEvents = {
  changeInputType: string
  toastMessage: Record<string, any>
}

export const install: UserModule = ({ app }) => {
  const emitter: Emitter<MittEvents> = mitt<MittEvents>()
  app.provide('emitter', emitter)
}
