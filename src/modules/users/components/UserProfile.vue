<script setup lang="ts">
const isUserFormRendered = ref(false)

function showAvatar() {
  isUserFormRendered.value = true
}
</script>

<template>
  <div class="box">
    <div
      flex-row
      justify-between
      class="box-inner"
    >
      <UserForm class="basis-3/4" @get-data-success="showAvatar" />
      <UserAvatar v-if="isUserFormRendered" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

  $color-alpha: #4d4c4b;

  .box {
    position: relative;
    padding: 5px;
    border: 2px solid $color-alpha;

    &:before,
    &:after {
      content: '•';
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
      padding: 50px;

      &:before,
      &:after {
        content: '•';
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
