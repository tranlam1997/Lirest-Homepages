import type { Rule } from 'unocss'

export const BoxShadowRules = (): Rule<{}>[] => {
  return [
    ['ct-user-header-box-shadow', { 'box-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }],
    ['ct-user-mini-menu-box-shadow', { 'box-shadow': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }],
  ]
}
