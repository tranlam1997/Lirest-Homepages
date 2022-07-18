<script setup lang="ts">
import { Field, useForm } from 'vee-validate'
import { useAuthStore } from '../auth.store'
import authService from '../auth.service'
import type { ILoginData } from '../auth.interface'
import { isDark } from '@/composables'

const emit = defineEmits<{
  (e: 'loginToastMessage', data: { message?: string; messageType?: string; active: boolean }): void
}>()
const router = useRouter()
const isDarkMode = isDark
const authStore = useAuthStore()
const loginSchema = {
  email: 'required|email',
  password: 'required|min:3',
}
const initialValues = {
  email: '',
  password: '',
}
const inputType = ref('')

const { handleSubmit, values, errors } = useForm<ILoginData>({
  validationSchema: loginSchema,
  initialValues,
})

const isFilledOut = () => {
  return Object.keys(values).every(key => values[key as keyof typeof values])
}

const changeInputType = (type: string) => {
  inputType.value = type
}

const onSubmit = handleSubmit(async (values) => {
  await authService.login({ loginData: values, authStore, emitEvent: emit, vueRouter: router })
})
</script>

<template>
  <form flex-col text-dark dark:text-white items-center @submit="onSubmit">
    <div class="form-element" flex-col justify-items-start>
      <label for="email">Username/Email:</label>
      <Field type="text" name="email" input-format />
      <i v-if="isDarkMode" class="dark" />
      <i v-if="!isDarkMode" class="light" />
      <span class="error-message">{{ errors.email }}</span>
    </div>

    <div class="form-element" flex-col>
      <label for="password">Password:</label>
      <Field :type="inputType" name="password" input-format />
      <i v-if="isDarkMode" class="dark" />
      <i v-if="!isDarkMode" class="light" />
      <ContentToggler @toggle-password="changeInputType" />
      <span class="error-message">{{ errors.password }}</span>
    </div>

    <div flex-row justify-between class="w-1/2">
      <p text-sm text-dark dark:text-white self-center>
        Not a member yet? <router-link underline to="/register">
          Sign up
        </router-link>
      </p>
      <button type="submit" :disabled="!isFilledOut()" btn-submit>
        Sign in
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  margin: 1rem 0 1rem;
  width: 75%;
  padding: 2rem 0 1rem;

  &>.form-element {
    width: 50%;
    height: 7rem;
  }
}

i::after {
  content: '';
  display: block;
  width: 0;
  margin-top: -1px;
  margin-left: 50%;
  border: 1px solid transparent;
  transition: all 0.5s ease-in-out;
}

input:focus+.light::after {
  width: 100%;
  margin: 0;
  border-color: #241c04;
  margin-top: -1px;
}

input:focus+.dark:after {
  width: 100%;
  margin: 0;
  border-color: #ffffff;
  margin-top: -1px;
}

.error-message {
  color: #f44336;
  font-size: 0.8rem;
}

label {
  text-align: left;
  align-self: auto;
}

button {
  padding: 0.25rem;
  margin: 1rem 0;
}
</style>
