<script setup lang="ts">
import { ErrorMessage, Field as VeeField, Form as VeeForm } from 'vee-validate'
import User from '@/models/user'
import { isDark } from '@/composables'

const user = reactive(new User())
const loginSchema = {
  email: 'required|email',
  password: 'required|min:6',
}

const isFilledOut = () => {
  return user.email && user.password
}

const onSubmit = () => {
}
</script>

<template>
  <VeeForm flex-col text-dark dark:text-white items-center :validation-schema="loginSchema" @submit="onSubmit">
    <div class="form-element" flex-col justify-items-start>
      <label for="email">Username/Email:</label>
      <VeeField v-model="user.email" type="text" name="email" input-format />
      <i v-if="isDark" class="dark" />
      <i v-if="!idDark" class="light" />
      <ErrorMessage class="error-message" name="email" />
    </div>

    <div class="form-element" flex-col>
      <label for="password">Password:</label>
      <VeeField v-model="user.password" type="password" name="password" input-format />
      <i v-if="isDark" class="dark" />
      <i v-if="!idDark" class="light" />
      <ErrorMessage class="error-message" name="password" />
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
  </VeeForm>
</template>

<style lang="scss" scoped>
 form {
      margin: 3rem 0 1rem;
      width: 75%;
      padding: 2rem 0 1rem;

      & > .form-element {
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
