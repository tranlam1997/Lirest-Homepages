<script setup lang="ts">
import { useUserStore } from '../user.store.js'

import { MittEvents } from '@/plugins/mitt';
import { Emitter } from 'mitt';

const userData = ref()
const route = useRoute()
const userStore = useUserStore()
const emitter = <Emitter<MittEvents>> inject('emitter')

userData.value = await userStore.getUserById(route.params.id as string)
onBeforeMount(() => {
  if(!userData.value) {
    emitter.emit('toastMessage', {
      message: 'User not found',
      messageType: 'error',
      active: true,
    })
  } else {
    userStore.$patch({
      userInfo: userData.value
    })
  }
})
</script>

<template>
  <form v-if="userData" flex-col gap-5>
    <UserInput label-name="firstname" label-content="First Name:" :value="userData.firstname">
      <InputText input-name="firstname" input-style="input-format" />
    </UserInput>
    <UserInput label-name="lastname" label-content="Last Name:" :value="userData.lastname">
      <InputText input-name="firstname" input-style="input-format" />
    </UserInput>
    <UserInput label-name="dateOfBirth" label-content="Date Of Birth:" :value="userData.dateOfBirth">
      <InputText input-name="firstname" input-style="input-format" />
    </UserInput>
    <UserInput label-name="phoneNumber" label-content="Phone Number:" :value="userData.phoneNumber">
      <InputText input-name="firstname" input-style="input-format" />
    </UserInput>
    <UserInput label-name="email" label-content="Email:" :value="userData.email">
      <InputText input-name="firstname" input-style="input-format" />
    </UserInput>
    <UserInput label-name="username" label-content="Username:" :value="userData.username">
      <InputText input-name="firstname" input-style="input-format" />
    </UserInput>
    <UserInput label-name="password" label-content="Password:" :value="userData.password">
      <InputText input-name="firstname" input-style="input-format" />
    </UserInput>
  </form>
</template>

<style scoped>

</style>
