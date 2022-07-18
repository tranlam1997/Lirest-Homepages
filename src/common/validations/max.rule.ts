export const maxChar = (value: any, max: number) => {
  if (value.length > max)
    return `This field must be at most ${max} characters long.`

  return true
}

export const maxValue = (value: any, max: number) => {
  if (value > max)
    return `This field must be at most ${max}`

  return true
}
