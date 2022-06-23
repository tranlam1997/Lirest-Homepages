import type { DynamicShortcut, StaticShortcut, StaticShortcutMap } from 'unocss'

export const DisplayShortcut = (): (StaticShortcut | DynamicShortcut<{}> | StaticShortcutMap)[] => {
  return [
    ['flex-row', 'flex flex-row'],
    ['flex-col', 'flex flex-col'],
  ]
}
