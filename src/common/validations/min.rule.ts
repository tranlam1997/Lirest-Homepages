export function minChar(value: any, min: number) {
  if (value.length < min)
    return `This field must be at least ${min} characters long.`

  return true
}

export function minValue(value: any, min: number) {
  if (value < min)
    return `This field must be at least ${min}`

  return true
}
