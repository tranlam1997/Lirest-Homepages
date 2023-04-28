export function alphaSpaces(value: string) {
  const regex = /^[a-zA-Z ]+$/
  return regex.test(value) ? true : 'Must be alphabetic'
}
