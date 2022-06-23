import type { Rule } from 'unocss'

export const ColorScheme = (): Rule<{}>[] => {
  return [
    [/^custom-bg-([a-zA-Z]+)/, (match) => {
      let colorCode = '#E6E6FA'
      switch (match[1]) {
        case 'khaki':
          colorCode = '#f0e68c'
          break
        case 'firebrick':
          colorCode = '#B22222'
          break
        case 'crimson':
          colorCode = '#DC143C'
          break
        case 'salmon':
          colorCode = '#FA8072'
          break
        case 'lightsalmon':
          colorCode = '#FFA07A'
          break
        case 'coral':
          colorCode = '#FF7F50'
          break
        case 'lightcoral':
          colorCode = '#F08080'
          break
      }
      return {
        'background-color': colorCode,
      }
    }],
  ]
}
