import type { UserShortcuts } from 'unocss'
import { ButtonShortcut } from './button.shortcut'
import { DisplayShortcut } from './display.shortcut'

export const Shortcuts = (): UserShortcuts<{}> => {
  return [
    ...ButtonShortcut(),
    ...DisplayShortcut(),
  ]
}

