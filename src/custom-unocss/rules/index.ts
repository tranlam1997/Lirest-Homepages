import type { Rule } from 'unocss'
import { ColorScheme } from './color.rules'
import { FlexDisplayRules } from './flex-display.rules'

export const Rules = (): Rule<{}>[] => {
  return [
    ...ColorScheme(),
    ...FlexDisplayRules(),
  ]
}
