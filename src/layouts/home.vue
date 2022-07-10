<template>
  <main class="px-4 py-10 text-center text-gray-900 dark:text-gray-100 w-full">
    <TheHeader />
    <RouterView class="content" />
    <NavBarSecondary />
  </main>
</template>

<style lang="scss" scoped>
  .content {
    width: 80%;
    margin: 2rem auto;
  }
</style>
