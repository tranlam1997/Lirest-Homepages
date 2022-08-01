<script setup lang="ts">
defineProps<{
  messagePosition?: Record<'top' | 'bottom' | 'left' | 'right', any>
}>()

onMounted(() => {
})
</script>

<template>
  <div class="message-container" :style="messagePosition">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .message-container {
    display: flex;
    justify-content: center;
    padding: 1rem;
    align-items: center;
    position: fixed;
    width: 300px;
    height: 50px;
    opacity: 0.9;
    transition: all 1s ease-in-out;
  }

  .success {
    background-color: #4caf50;
    color: #ffffff;
  }

  .info {
    background-color: #00bcd4;
    color: #ffffff;
  }

  .warning {
    background-color: #ff9800;
    color: #ffffff;
  }

  .error {
    background-color: #f44336;
    color: #ffffff;
  }
</style>
