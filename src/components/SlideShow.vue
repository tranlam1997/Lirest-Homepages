<script lang="ts" setup>
import type { Ref } from 'Vue'
const images: Ref<string[]> = ref(['https://csecenglishmadeeasy.com/wp-content/uploads/2017/11/library-wallpaper-50371-52062-hd-wallpapers.jpg', 'https://images.wallpaperscraft.com/image/single/books_shelf_collection_119979_1920x1080.jpg', 'https://images.wallpaperscraft.com/image/single/books_old_reading_124989_1920x1080.jpg'])
const slideImages = [images.value[images.value.length - 1], ...images.value, images.value[0]]
const diff = ref(0)
const count = ref(1)
const isActive = ref(false)
const clicked = ref(false)

const actionSlideBack = () => {
  if (clicked.value)
    return
  clicked.value = true
  count.value -= 1
  diff.value += 100
  if (count.value === 0) {
    count.value = slideImages.length - 2
    setTimeout(() => {
      isActive.value = true
      diff.value = -100 * (slideImages.length - 3)
    }, 300)
  }
  setTimeout(() => {
    clicked.value = false
  }, 300)
  isActive.value = false
}

const actionSlideForward = () => {
  if (clicked.value)
    return
  clicked.value = true
  count.value += 1
  diff.value -= 100
  if (count.value === slideImages.length - 1) {
    count.value = 1
    setTimeout(() => {
      isActive.value = true
      diff.value = 0
    }, 300)
  }
  setTimeout(() => {
    clicked.value = false
  }, 300)
  isActive.value = false
}

const translateContainer = () => {
  return `translateX(${-100 + diff.value}%)`
}
</script>

<template>
  <div class="slide-container">
    <div class="back" i-ant-design:arrow-left-outlined :disabled="clicked" @click.prevent="actionSlideBack" />
    <div class="forward" i-ant-design:arrow-right-outlined :disabled="clicked" @click.prevent="actionSlideForward" />
    <div class="image-container" :style="{ transform: translateContainer() }" :class="{ 'no-transition': isActive }">
      <img
        v-for="(image, index) of slideImages" :key="`${image}${index}`" :src="image"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-container {
  flex-basis: 60%;
  position: relative;
  overflow: hidden;
}

.image-container {
  transition: all 0.2s linear 0.1s;
  white-space: nowrap;
  width: 100%;
  height: 100%;
}

.no-transition {
  -webkit-transition: none !important;
  transition: none !important;
}

img {
  display:inline-block;
  vertical-align: top;
  width: 100%;
  height: 100%;
}

.back,
.forward {
  font-size: 30px;
  display: inline;
  position: absolute;
  top: 50%;
  cursor: pointer;
  z-index: 1;
  color: black;

  &:hover {
    color: #fff;
  }
}

.back {
  left: 1%;
}

.forward {
  right: 1%;
}
</style>
