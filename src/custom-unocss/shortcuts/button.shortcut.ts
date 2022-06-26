import type { DynamicShortcut, StaticShortcut, StaticShortcutMap } from 'unocss'

export const ButtonShortcut = (): (StaticShortcut | DynamicShortcut<{}> | StaticShortcutMap)[] => {
  return [
    ['btn', 'px-4 py-2 rounded inline-block custom-bg-cadetblue text-white cursor-pointer hover:custom-bg-steelblue disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-white-900 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-white-600'],
  ]
}
