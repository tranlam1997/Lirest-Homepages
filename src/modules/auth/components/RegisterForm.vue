<script setup lang="ts">
import { Field, useForm } from 'vee-validate'
import type { IRegisterForm } from '../auth.interface'
import { isDark } from '@/composables'
import { useUserStore } from '@/modules/users/user.store'
import userService from '@/modules/users/user.service'

const emit = defineEmits<{
  (e: 'toastMessage', data: { message?: string; messageType?: string; active: boolean }): void
}>()
const inputType = ref('password')
const router = useRouter()
const isDarkMode = isDark
const userStore = useUserStore()
const initialValues = {
  firstname: '',
  lastname: '',
  dateOfBirth: '',
  email: '',
  phoneNumber: '',
  username: '',
  password: '',
  confirmPassword: '',
}

const registerSchema = {
  firstname: 'required|min:3|max:20|name',
  lastname: 'required|min:3|max:20|name',
  dateOfBirth: 'required',
  email: 'required|email',
  phoneNumber: 'required|phone',
  username: 'required|min:3|max:30',
  password: 'required|min:3|max:30|password',
  confirmPassword: 'required|passwords_mismatch:@password',
}

const { handleSubmit, validateField, values, errors } = useForm<IRegisterForm>({
  validationSchema: registerSchema,
  initialValues,
})

const isFilledOut = () => {
  return Object.keys(values).every(key => values[key as keyof typeof values])
}

const changeInputType = (type: string) => {
  inputType.value = type
}

const onSubmit = handleSubmit(async (values) => {
  await userService.createUser({ user: values, userStore, emitEvent: emit, vueRouter: router })
})

onMounted(() => {
})

onUpdated(() => {
})
</script>

<template>
  <form flex-col text-dark dark:text-white items-center @submit="onSubmit">
    <div class="form-element" flex-row justify-between>
      <div flex-col justify-items-start class="ct-basis-45">
        <label for="firstname">First Name:</label>
        <Field type="text" name="firstname" input-format @input="validateField('firstname')" />
        <i v-if="isDarkMode" class="dark" />
        <i v-if="!isDarkMode" class="light" />
        <span class="error-message">{{ errors.firstname }}</span>
      </div>

      <div flex-col justify-items-start class="ct-basis-45">
        <label for="lastname">Last Name:</label>
        <Field type="text" name="lastname" input-format @input="validateField('lastname')" />
        <i v-if="isDarkMode" class="dark" />
        <i v-if="!isDarkMode" class="light" />
        <span class="error-message">{{ errors.lastname }}</span>
      </div>
    </div>

    <div class="form-element" flex-row justify-between>
      <div flex-col justify-items-start class="ct-basis-45">
        <label for="dateOfBirth">Date Of Birth:</label>
        <Field p-1 border-1 border-gray-400 placeholder="DD-MM-YYYY" type="date" name="dateOfBirth" dark:text-dark @input="validateField('dateOfBirth')" />
        <span class="error-message">{{ errors.dateOfBirth }}</span>
      </div>

      <div flex-col justify-items-start class="ct-basis-45">
        <label for="email">Email:</label>
        <Field type="text" name="email" input-format @input="validateField('email')" />
        <i v-if="isDarkMode" class="dark" />
        <i v-if="!isDarkMode" class="light" />
        <span class="error-message">{{ errors.email }}</span>
      </div>
    </div>

    <div class="form-element" flex-row justify-between>
      <div flex-col justify-items-start class="ct-basis-45">
        <label for="phoneNumber">Phone Number:</label>
        <Field type="text" name="phoneNumber" input-format @input="validateField('phoneNumber')" />
        <i v-if="isDarkMode" class="dark" />
        <i v-if="!isDarkMode" class="light" />
        <span class="error-message">{{ errors.phoneNumber }}</span>
      </div>

      <div flex-col justify-items-start class="ct-basis-45">
        <label for="username">Username:</label>
        <Field type="text" name="username" input-format @input="validateField('username')" />
        <i v-if="isDarkMode" class="dark" />
        <i v-if="!isDarkMode" class="light" />
        <span class="error-message">{{ errors.username }}</span>
      </div>
    </div>

    <div class="form-element" flex-row justify-between>
      <div flex-col justify-items-start class="ct-basis-45">
        <label for="password">Password:</label>
        <div relative flex-col>
          <Field :type="inputType" name="password" input-format @input="validateField('password')" />
          <i v-if="isDarkMode" class="dark" />
          <i v-if="!isDarkMode" class="light" />
          <ContentToggler bg-white dark:bg-dark absolute pl-2 top-1 right-0 @toggle-content="changeInputType" />
        </div>

        <span class="error-message">{{ errors.password }}</span>
      </div>

      <div flex-col justify-items-start class="ct-basis-45">
        <label for="confirmPassword">Confirm Password:</label>
        <Field type="password" name="confirmPassword" input-format />
        <i v-if="isDarkMode" class="dark" />
        <i v-if="!isDarkMode" class="light" />
        <span class="error-message">{{ errors.confirmPassword }}</span>
      </div>
    </div>

    <div flex-row justify-between class="w-1/2">
      <p text-sm text-dark dark:text-white self-center>
        Already a member? <router-link underline to="/login">
          Sign in
        </router-link>
      </p>
      <button :disabled="!isFilledOut()" btn-submit>
        Sign up
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
    width: 100%;
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
