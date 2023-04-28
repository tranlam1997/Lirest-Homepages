import type { Rule } from 'unocss'
import { BoxShadowRules } from './box-shadow.rules'
import { ColorScheme } from './color.rules'
import { FlexDisplayRules } from './flex-display.rules'

export function Rules(): Rule<{}>[] {
  return [...ColorScheme(), ...FlexDisplayRules(), ...BoxShadowRules()]
}
