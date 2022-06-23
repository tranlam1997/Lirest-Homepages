import type { Rule } from 'unocss'
import { ColorScheme } from './color.rules'

export const Rules = (): Rule<{}>[] => {
  return [
    ...ColorScheme(),
  ]
}
