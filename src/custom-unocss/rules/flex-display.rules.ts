import type { Rule } from 'unocss'

export const FlexDisplayRules = (): Rule<{}>[] => {
  return [
    ['ct-basis-45', { 'flex-basis': '45%' }],
  ]
}
