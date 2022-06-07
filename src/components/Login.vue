<script lang="ts" setup>
const email = ref('')
const password = ref('')

function login() {
  return true
}
</script>

<template>
  <div class="login">
    <div class="login__container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="login__form">
          <div class="login__form__group">
            <label for="email">Email</label>
            <input id="email" v-model="email" type="email" required>
          </div>
          <div class="login__form__group">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" required>
          </div>
          <div class="login__form__group">
            <button type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
</style>
