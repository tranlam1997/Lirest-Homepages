export const required = (value: any) => {
  if (value === undefined || value === null || value === '')
    return 'This field is required.'

  return true
}
