<script setup>
defineProps<{
  transitionName: string
}>()
</script>

<template>
  <Transition :name="transitionName">
    <slot />
  </Transition>
</template>

<style>
  .translate-enter-active,
  .translate-leave-active {
    transition: all 0.5s ease;
  }

  .translate-enter-from,
  .translate-leave-to {
    transform: translateX(100%);
  }

  .translate-enter-to,
  .translate-leave-from {
    transform: translateX(50%);
  }
</style>
