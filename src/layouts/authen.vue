<template>
  <div py-10 dark:bg-black>
    <SecondaryNavBar class="secondary-nav-bar" />
    <main class="px-4 py-10 text-center flex-col items-center w-1/2" dark:bg-dark-600>
      <LirestLogo />
      <i class="horizontal-line" />
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
 main {
  position: relative;
  top: 0;
  left: 25%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 }

 .horizontal-line {
  width: 75%;
  height: 1px;
  background-color: #383434;
  margin-top: 1rem;
  opacity: 0.8;
 }

 .secondary-nav-bar {
  position: absolute;
  top: 0;
  right: 0;
 }
</style>
