<script setup lang="ts">
import { useField } from 'vee-validate'
import yup from 'yup'

const username = ref('')
const { errorMessage, value } = useField('username', yup.string().required().min(8))
return {
  value,
  errorMessage,
}
</script>

<template>
  <div>
    <label>Username/Email</label>
    <input v-model="username" type="text">
  </div>
  <div>
    <label>Password</label>
    <input v-model="password" type="password">
  </div>
</template>

<style>
</style>
