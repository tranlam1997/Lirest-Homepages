<script setup lang="ts">
import { Field } from 'vee-validate'

import { InputEmitEvents } from './enums/input.enum'
import { isDark } from '@/composables'

defineProps<{
  inputName?: string
  inputType: string
  inputStyle?: string
  inputPlaceholder?: string
}>()

defineEmits<{
  (e: InputEmitEvents.INPUT_EVENT): void
}>()

const isDarkMode = isDark
</script>

<template>
  <div>
    <Field
      :type="inputType"
      :name="inputName"
      :placeholder="inputPlaceholder"
      :class="inputStyle"
      @input="$emit(InputEmitEvents.INPUT_EVENT)"
    />
    <slot>
      <i
        v-if="isDarkMode"
        class="dark"
      />
      <i
        v-if="!isDarkMode"
        class="light"
      />
    </slot>
  </div>
</template>

<style scoped>
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
</style>
