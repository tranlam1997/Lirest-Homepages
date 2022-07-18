export const isValidPhoneNumber = (value: string) => {
  const regex = /^\+?[0-9]{10,15}$/
  return regex.test(value) ? true : 'Phone number is invalid'
}
