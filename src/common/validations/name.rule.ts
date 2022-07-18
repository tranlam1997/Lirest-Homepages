export const isValidName = (value: string) => {
  const regex = /^(?!.*\d)[^!<>?=+@{}_$%]+$/
  return regex.test(value) ? true : 'Name field must not contain number and special characters'
}
