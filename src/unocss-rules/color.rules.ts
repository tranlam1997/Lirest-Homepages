import type { Rule } from 'unocss'

export function ColorScheme(): Rule<{}>[] {
  return [
    [
      /^custom-bg-([a-zA-Z]+)/,
      (match) => {
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
          case 'cornsilk':
            colorCode = '#FFF8DC'
            break
          case 'lightseagreen':
            colorCode = '#20B2AA'
            break
          case 'mediumaquamarine':
            colorCode = '#66CDAA'
            break
          case 'gold':
            colorCode = '#FFD700'
            break
          case 'lightgoldenrodyellow':
            colorCode = '#FAFAD2'
            break
          case 'moccasin':
            colorCode = '#FFE4B5'
            break
          case 'darkmoccasin':
            colorCode = '#FFE4B5'
            break
          case 'indianred':
            colorCode = '#CD5C5C'
            break
          case 'darkorange':
            colorCode = '#FF8C00'
            break
          case 'orangered':
            colorCode = '#FF4500'
            break
          case 'cadetblue':
            colorCode = '#5F9EA0'
            break
          case 'steelblue':
            colorCode = '#4682B4'
            break
        }
        return {
          'background-color': colorCode,
        }
      },
    ],
  ]
}
