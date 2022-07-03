<script setup lang="ts">
import { ErrorMessage, Field as VeeField, Form as VeeForm } from 'vee-validate'
import User from '@/models/user'
import { isDark } from '@/composables'

const user = reactive(new User())
const registerSchema = {
  firstName: 'required|min:3|max:100|name',
  lastName: 'required|min:3|max:100|name',
  dateOfBirth: 'required',
  email: 'required|email',
  address: 'required|min:3|max:100',
  phoneNumber: 'required|phone',
  password: 'required|password',
  confirm_password: 'passwords_mismatch:@password',
  tos: 'tos',
}

const isFilledOut = () => {
  return user.email && user.password
}

const onSubmit = () => {
}
</script>

<template>
  <VeeForm flex-col text-dark dark:text-white items-center :validation-schema="registerSchema" @submit="onSubmit">
    <div class="form-element" flex-row justify-between>
      <div flex-col justify-items-start>
        <label for="firstName">First Name:</label>
        <VeeField v-model="user.firstName" type="text" name="firstName" input-format />
        <i v-if="isDark" class="dark" />
        <i v-if="!idDark" class="light" />
        <ErrorMessage class="error-message" name="firstName" />
      </div>

      <div flex-col justify-items-start>
        <label for="lastName">Last Name:</label>
        <VeeField v-model="user.lastName" type="text" name="lastName" input-format />
        <i v-if="isDark" class="dark" />
        <i v-if="!idDark" class="light" />
        <ErrorMessage class="error-message" name="lastName" />
      </div>
    </div>

    <div class="form-element" flex-col justify-items-start>
      <label for="dateOfBirth">Date Of Birth:</label>
      <VeeField v-model="user.dateOfBirth" placeholder="DD-MM-YYYY" type="date" name="dateOfBirth" dark:text-dark />
      <ErrorMessage class="error-message" name="dateOfBirth" />
    </div>

    <div class="form-element" flex-col justify-items-start>
      <label for="email">Email:</label>
      <VeeField v-model="user.email" type="text" name="email" input-format />
      <i v-if="isDark" class="dark" />
      <i v-if="!idDark" class="light" />
      <ErrorMessage class="error-message" name="email" />
    </div>

    <div class="form-element" flex-col justify-items-start>
      <label for="address">Address:</label>
      <VeeField v-model="user.address" type="text" name="address" input-format />
      <i v-if="isDark" class="dark" />
      <i v-if="!idDark" class="light" />
      <ErrorMessage class="error-message" name="address" />
    </div>

    <div class="form-element" flex-col justify-items-start>
      <label for="phoneNumber">Phone Number:</label>
      <VeeField v-model="user.phoneNumber" type="text" name="phoneNumber" input-format />
      <i v-if="isDark" class="dark" />
      <i v-if="!idDark" class="light" />
      <ErrorMessage class="error-message" name="phoneNumber" />
    </div>

    <div class="form-element" flex-col justify-items-start>
      <label for="password">Password:</label>
      <VeeField v-model="user.password" type="password" name="password" input-format />
      <i v-if="isDark" class="dark" />
      <i v-if="!idDark" class="light" />
      <ErrorMessage class="error-message" name="password" />
    </div>

    <div class="form-element" flex-col justify-items-start>
      <label for="confirmPassword">Confirm Password:</label>
      <VeeField v-model="user.confirmPassword" type="password" name="confirmPassword" input-format />
      <i v-if="isDark" class="dark" />
      <i v-if="!idDark" class="light" />
      <ErrorMessage class="error-message" name="confirmPassword" />
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

      & > .form-element {
        width: 60%;
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

    input:focus + .light::after {
      width: 100%;
      margin: 0;
      border-color: #241c04;
      margin-top: -1px;
    }

    input:focus + .dark:after {
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
