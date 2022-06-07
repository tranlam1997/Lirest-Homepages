export const convertLocaleCodeToLanguage = (localeCode: string) => {
  switch (localeCode) {
    case 'ar':
      return 'Arabic'
    case 'de':
      return 'German'
    case 'en':
      return 'English'
    case 'es':
      return 'Spanish'
    case 'fr':
      return 'French'
    case 'it':
      return 'Italian'
    case 'ja':
      return 'Japanese'
    case 'ko':
      return 'Korean'
    case 'pt-BR':
      return 'Portuguese (Brazil)'
    case 'ru':
      return 'Russian'
    case 'zh-CN':
      return 'Chinese (Simplified)'
    case 'pl':
      return 'Polish'
    case 'tr':
      return 'Turkish'
    case 'vi':
      return 'Vietnamese'
    case 'id':
      return 'Indonesian'
  }
}
