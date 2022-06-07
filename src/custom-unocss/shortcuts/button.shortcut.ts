import type { DynamicShortcut, StaticShortcut, StaticShortcutMap } from 'unocss'

export const ButtonShortcut = (): (StaticShortcut | DynamicShortcut<{}> | StaticShortcutMap)[] => {
  return [
    ['btn', 'px-4 py-2 rounded inline-block custom-bg-lightcoral text-white cursor-pointer hover:custom-bg-coral disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-white-600'],
  ]
}
