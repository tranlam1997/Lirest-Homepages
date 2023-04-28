import { configure, defineRule } from 'vee-validate'
import {
  alpha_spaces as alphaSpaces,
  confirmed,
  email,
  not_one_of as excluded,
  max,
  max_value as maxVal,
  min,
  min_value as minVal,
  required,
} from '@vee-validate/rules'
import type { UserModule } from '@/types'

export const install: UserModule = () => {
  const isValidPhone = (value: string) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/
    return phoneRegex.test(value)
  }
  const isValidPassword = (value: string) => {
    const passwordRegex = /.{3,16}$/
    return passwordRegex.test(value)
  }
  const isValidName = (value: string) => {
    const nameRegex = /^(?!.*\d)[^!<>?=+@{}_$%]+$/
    return nameRegex.test(value)
  }
  defineRule('required', required)
  defineRule('tos', required)
  defineRule('min', min)
  defineRule('max', max)
  defineRule('alpha_spaces', alphaSpaces)
  defineRule('email', email)
  defineRule('min_value', minVal)
  defineRule('max_value', maxVal)
  defineRule('passwords_mismatch', confirmed)
  defineRule('excluded', excluded)
  defineRule('phone', isValidPhone)
  defineRule('password', isValidPassword)
  defineRule('name', isValidName)
  configure({
    generateMessage: (ctx: any) => {
      const filterString = ctx.field.replace(/([A-Z])/g, ' $1')
      const field
        = filterString.charAt(0).toUpperCase() + filterString.slice(1)
      const messages = {
        required: `The field ${field} is required.`,
        min: `The field ${field} is too short.`,
        max: `The field ${field} is too long.`,
        alpha_spaces: `The field ${field} must only contain alphabetical characters and spaces.`,
        email: `The field ${field} must be a valid email.`,
        phone: `The field ${field} must be a valid phone number`,
        min_value: `The field ${field} is too low.`,
        max_value: `The field ${field} is too high.`,
        excluded: `You are not allowed to use this value for the field ${field}.`,
        passwords_mismatch: 'The passwords don\'t match.',
        tos: 'You must accept the Terms of Service.',
        password: `The field ${field} must be not less than 6 characters and contain at least one uppercase letter and one number.`,
        name: `The field ${field} must not contain number and special characters`,
      }

      const message = messages[ctx.rule.name as keyof typeof messages]
        ? messages[ctx.rule.name as keyof typeof messages]
        : `The field ${field} is invalid.`

      return message
    },
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
  })
}
