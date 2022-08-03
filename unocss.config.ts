import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { Rules } from './src/unocss-rules'

export default defineConfig({
  rules: Rules(),
  shortcuts: [
    ['btn', 'px-4 py-2 rounded inline-block bg-black dark:bg-white text-gray-100 dark:text-gray-900 cursor-pointer hover:custom-bg-cadetblue hover:text-white disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['btn-submit', 'w-25 border-1 border-gray-900 dark:border-gray-100 rounded-lg  p-0.25 hover:custom-bg-cadetblue hover:text-white bg-dark dark:bg-white text-white dark:text-dark dark:disabled:bg-gray-300 disabled:bg-gray-600 disabled:opacity-50'],
    ['btn-user', 'px-4 py-2 bg-green-500 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-500 text-white dark:text-white'],
    ['icon-btn', 'text-gray-900 dark:text-gray-100 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-900'],
    ['input-format', 'w-full border-1 border-gray-300 dark:border-gray-500 dark:bg-gray-800 p-1 border-x-0 border-t-0 focus:outline-none'],
    ['flex-row', 'flex flex-row'],
    ['flex-col', 'flex flex-col'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
