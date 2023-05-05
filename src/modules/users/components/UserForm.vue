<script setup lang="ts">
import type { Emitter } from 'mitt'
import { useUserStore } from '../user.store'

import type { MittEvents } from '@/plugins/mitt'

const emit = defineEmits<{
  (e: 'getDataSuccess'): void
}>()

const userData = ref()
const route = useRoute()
const userStore = useUserStore()
const emitter = <Emitter<MittEvents>>inject('emitter')

userData.value = await userStore.getUserById(route.params.id as string)

onBeforeMount(() => {
  if (!userData.value) {
    emitter.emit('toastMessage', {
      message: 'User not found',
      messageType: 'error',
      active: true,
    })
  }
  else {
    userStore.$patch({
      userInfo: userData.value,
    })
  }
})

onMounted(() => {
  emit('getDataSuccess')
})
</script>

<template>
  <form
    v-if="userData"
    flex-col
    gap-5
  >
    <UserInput
      label-name="firstname"
      label-content="First Name:"
      :value="userData.data.firstName"
    >
      <InputText
        input-name="firstname"
        input-style="input-format"
      />
    </UserInput>
    <UserInput
      label-name="lastname"
      label-content="Last Name:"
      :value="userData.data.lastName"
    >
      <InputText
        input-name="lastname"
        input-style="input-format"
      />
    </UserInput>
    <UserInput
      label-name="dateOfBirth"
      label-content="Date Of Birth:"
      :value="userData.data.dateOfBirth"
    >
      <InputText
        input-name="dateOfBirth"
        input-style="input-format"
      />
    </UserInput>
    <UserInput
      label-name="phoneNumber"
      label-content="Phone Number:"
      :value="userData.data.phoneNumber"
    >
      <InputText
        input-name="phoneNumber"
        input-style="input-format"
      />
    </UserInput>
    <UserInput
      label-name="email"
      label-content="Email:"
      :value="userData.data.email"
    >
      <InputText
        input-name="email"
        input-style="input-format"
      />
    </UserInput>
    <UserInput
      label-name="username"
      label-content="Username:"
      :value="userData.data.username"
    >
      <InputText
        input-name="username"
        input-style="input-format"
      />
    </UserInput>
  </form>
</template>

<style scoped></style>
