<script setup lang="ts">
const tabs = [
  {
    content: 'Overview',
    symbol: 'i-openmoji:overview',
  },
  {
    content: 'Collections',
    symbol: 'i-bi:collection',
  },
  {
    content: 'Favorites',
    symbol: 'i-carbon:favorite-filled',
  },
]
</script>

<template>
  <div flex-row>
    <template v-for="(tab, index) of tabs" :key="`${tab}${index}`">
      <UserTab :content="tab.content" :symbol="tab.symbol" />
    </template>
  </div>
</template>

<style lang="">

</style>
