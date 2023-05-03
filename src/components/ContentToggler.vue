<script setup lang="ts">
import type { Emitter } from 'mitt'
import type { MittEvents } from '@/plugins/mitt'

defineProps<{
  isFocus: boolean
  [k: string]: any
}>()

const active = ref(true)
const emitter = <Emitter<MittEvents>>inject('emitter')

function changeInputType(type: string) {
  active.value = !active.value
  emitter.emit('changeInputType', type)
}
</script>

<template>
  <div
    v-show="isFocus"
    flex-row bg-transparent
  >
    <!-- <div
      v-if="active"
      class="i-fa:eye"
      cursor-pointer
      @click.prevent="changeInputType('text')"
    /> -->
    <i
      v-if="active"
      class="i-fa:eye"
      cursor-pointer
      @click.prevent="changeInputType('text')"
    />
    <!-- <div
      v-if="!active"
      class="i-fa-regular:eye-slash"
      cursor-pointer
      @click.prevent="changeInputType('password')"
    /> -->
    <i
      v-if="!active"
      class="i-fa-regular:eye-slash"
      cursor-pointer
      @click.prevent="changeInputType('password')"
    />
  </div>
</template>

<style scoped lang="scss">
</style>
