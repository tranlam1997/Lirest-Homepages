<script setup lang="ts">
</script>

<template>
  <div class="box">
    <div flex-row justify-between class="box-inner">
      <UserForm class="w-1/2" />
      <UserAvatar />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

$color-alpha: #4d4c4b;

.box {
  position: relative;
  background-color: rgba(#000, 0.5);
  padding: 5px;
  border: 2px solid $color-alpha;

  &:before,
  &:after {
    content: "•";
    position: absolute;
    width: 14px;
    height: 14px;
    font-size: 14px;
    color: $color-alpha;
    border: 2px solid $color-alpha;
    line-height: 12px;
    top: 5px;
    text-align: center;
  }

  &:before {
    left: 5px;
  }

  &:after {
    right: 5px;
  }

  .box-inner {
    position: relative;
    border: 2px solid $color-alpha;
    padding: 40px;

    &:before,
    &:after {
      content: "•";
      position: absolute;
      width: 14px;
      height: 14px;
      font-size: 14px;
      color: $color-alpha;
      border: 2px solid $color-alpha;
      line-height: 12px;
      bottom: -2px;
      text-align: center;
    }

    &:before {
      left: -2px;
    }

    &:after {
      right: -2px;
    }
  }
}
</style>
