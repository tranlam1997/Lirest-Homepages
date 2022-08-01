<script setup lang="ts">
import { MittEvents } from '@/plugins/mitt';
import type { Emitter } from 'mitt'

const active = ref(true)
const emitter = <Emitter<MittEvents>> inject('emitter')

const changeInputType = (type: string) => {
  active.value = !active.value
  emitter.emit('changeInputType', type)
}
</script>

<template>
  <div flex-row>
    <div
      v-if="active" class="i-fa-regular:eye" cursor-pointer
      @click.prevent="changeInputType('text')"
    />
    <div
      v-if="!active" class="i-fa-regular:eye-slash" cursor-pointer
      @click.prevent="changeInputType('password')"
    />
  </div>
</template>

<style scoped lang="scss">
</style>
