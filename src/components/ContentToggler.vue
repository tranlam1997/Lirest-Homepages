<script setup lang="ts">
import type { Emitter } from 'mitt'
import type { MittEvents } from './interfaces/content-togger.interface'

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
