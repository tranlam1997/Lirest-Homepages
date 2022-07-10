<script setup lang="ts">
import { ErrorMessage, Field as VeeField, Form as VeeForm } from 'vee-validate'
import User from '@/modules/users/user.model'
import { isDark } from '@/composables'

const user = reactive(new User())
const confirmPassword = ref('')
const registerSchema = {
  firstName: 'required|min:3|max:100|name',
  lastName: 'required|min:3|max:100|name',
  dateOfBirth: 'required',
  email: 'required|email',
  phoneNumber: 'required|phone',
  username: 'required|min:3|max:20',
  password: 'required|password',
  confirmPassword: 'passwords_mismatch:@password',
  tos: 'tos',
}

const isFilledOut = () => {
  return user.firstName && user.lastName && user.dateOfBirth && user.email && user.phoneNumber && user.username && user.password && confirmPassword
}

const register = () => {

}

const onSubmit = () => {

}
</script>

<template>
  <VeeForm flex-col text-dark dark:text-white items-center :validation-schema="registerSchema" @submit="onSubmit">
    <div class="form-element" flex-row justify-between>
      <div flex-col justify-items-start class="ct-basis-45">
        <label for="firstName">First Name:</label>
        <VeeField v-model="user.firstName" type="text" name="firstName" input-format />
        <i v-if="isDark" class="dark" />
        <i v-if="!idDark" class="light" />
        <ErrorMessage class="error-message" name="firstName" />
      </div>

      <div flex-col justify-items-start class="ct-basis-45">
        <label for="lastName">Last Name:</label>
        <VeeField v-model="user.lastName" type="text" name="lastName" input-format />
        <i v-if="isDark" class="dark" />
        <i v-if="!idDark" class="light" />
        <ErrorMessage class="error-message" name="lastName" />
      </div>
    </div>

    <div class="form-element" flex-row justify-between>
      <div flex-col justify-items-start class="ct-basis-45">
        <label for="dateOfBirth">Date Of Birth:</label>
        <VeeField v-model="user.dateOfBirth" p-1 border-1 border-gray-400 placeholder="DD-MM-YYYY" type="date" name="dateOfBirth" dark:text-dark />
        <ErrorMessage class="error-message" name="dateOfBirth" />
      </div>

      <div flex-col justify-items-start class="ct-basis-45">
        <label for="email">Email:</label>
        <VeeField v-model="user.email" type="text" name="email" input-format />
        <i v-if="isDark" class="dark" />
        <i v-if="!idDark" class="light" />
        <ErrorMessage class="error-message" name="email" />
      </div>
    </div>

    <div class="form-element" flex-row justify-between>
      <div flex-col justify-items-start class="ct-basis-45">
        <label for="phoneNumber">Phone Number:</label>
        <VeeField v-model="user.phoneNumber" type="text" name="phoneNumber" input-format />
        <i v-if="isDark" class="dark" />
        <i v-if="!idDark" class="light" />
        <ErrorMessage class="error-message" name="phoneNumber" />
      </div>

      <div flex-col justify-items-start class="ct-basis-45">
        <label for="username">Username:</label>
        <VeeField v-model="user.username" type="text" name="username" input-format />
        <i v-if="isDark" class="dark" />
        <i v-if="!idDark" class="light" />
        <ErrorMessage class="error-message" name="username" />
      </div>
    </div>

    <div class="form-element" flex-row justify-between>
      <div flex-col justify-items-start class="ct-basis-45">
        <label for="password">Password:</label>
        <VeeField v-model="user.password" type="password" name="password" input-format />
        <i v-if="isDark" class="dark" />
        <i v-if="!idDark" class="light" />
        <ErrorMessage class="error-message" name="password" />
      </div>

      <div flex-col justify-items-start class="ct-basis-45">
        <label for="confirmPassword">Confirm Password:</label>
        <VeeField v-model="confirmPassword" type="password" name="confirmPassword" input-format />
        <i v-if="isDark" class="dark" />
        <i v-if="!idDark" class="light" />
        <ErrorMessage class="error-message" name="confirmPassword" />
      </div>
    </div>

    <div flex-row justify-between class="w-1/2">
      <p text-sm text-dark dark:text-white self-center>
        Already a member? <router-link underline to="/login">
          Sign in
        </router-link>
      </p>
      <button type="submit" :disabled="!isFilledOut()" btn-submit>
        Sign up
      </button>
    </div>
  </VeeForm>
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
