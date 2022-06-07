<script setup lang="ts">

</script>

<template>
  <div border="1 red-800">
    <ul flex-col m-5 border="1 white-200">
      <li border="1 yellow-200">
        <router-link to="">
          Home
        </router-link>
      </li>
      <li border="1 blue-200">
        <router-link to="">
          Category
        </router-link>
      </li>
      <li>
        <router-link to="">
          Author
        </router-link>
      </li>
      <li>
        <router-link to="">
          Publisher
        </router-link>
      </li>
      <li>
        <router-link to="">
          Vendor
        </router-link>
      </li>
      <li>
        <router-link to="">
          Auction
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/scss/mixins/nth-child.mixin.scss';
$navigatorChildren: 6;

li {
  list-style: none;
  display: block;
  width: 25%;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

ul li {
  @include addMarginToNavigatorChildren($navigatorChildren);
}
</style>
