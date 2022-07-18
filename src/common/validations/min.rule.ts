export const minChar = (value: any, min: number) => {
  if (value.length < min)
    return `This field must be at least ${min} characters long.`

  return true
}

export const minValue = (value: any, min: number) => {
  if (value < min)
    return `This field must be at least ${min}`

  return true
}
