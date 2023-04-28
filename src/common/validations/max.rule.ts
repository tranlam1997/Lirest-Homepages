export function maxChar(value: any, max: number) {
  if (value.length > max)
    return `This field must be at most ${max} characters long.`

  return true
}

export function maxValue(value: any, max: number) {
  if (value > max)
    return `This field must be at most ${max}`

  return true
}
