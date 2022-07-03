<script setup lang="ts">
import { ErrorMessage, Field as VeeField, Form as VeeForm } from 'vee-validate'

const loginSchema = {
  email: 'required|email',
  password: 'required|min:6',
}

const onSubmit = () => {
  console.log('submit')
}
</script>

<template>
  <VeeForm flex-col text-dark dark:text-white items-center :validation-schema="loginSchema" @submit="onSubmit">
    <div class="form-element" flex-col justify-center>
      <label for="email">Username/Email:</label>
      <VeeField type="text" name="email" input-format />
      <ErrorMessage name="email" />
    </div>

    <div class="form-element" flex-col>
      <label for="password">Password:</label>
      <VeeField type="password" name="password" input-format />
      <ErrorMessage name="password" />
    </div>
    <button type="submit" :disabled="isSubmitting" btn-submit>
      Sign in
    </button>
  </VeeForm>
</template>

<style lang="scss" scoped>
 form {
      margin: 2rem  0;
      position: relative;
      left: 25%;
      width: 50%;
      height: auto;

      & > .form-element {
        margin: 1rem 0;
        width: 50%;
      }
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
