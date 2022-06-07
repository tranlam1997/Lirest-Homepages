<script lang="ts" setup>
import type { Ref } from 'Vue'
const images: Ref<string[]> = ref(['https://trontz.com/wp-content/uploads/2018/11/trontz-page-case-studies-trim-healthy-mama-image6-1390x380.jpg', 'https://prcdn.freetls.fastly.net/release_image/3092/507/3092-507-761a6f9987155361d2e89c1ce7db5822-1390x380.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds'])
const styleSlide: Record<string, any> = reactive({})
const styleSlide2: Record<string, any> = reactive({})
const imageId = ref(0)

const actionSlideBack = () => {
  styleSlide.transition = 'transform 0.5s ease-in-out'
  styleSlide.transform = 'translateX(-100%)'
  styleSlide2.transition = 'transform 0.5s ease-in-out'
  styleSlide2.transform = 'translateX(0)'
  imageId.value--
}
const actionSlideForward = () => {
  styleSlide.transition = 'transform 0.5s ease-in-out'
  styleSlide.transform = 'translateX(0)'
  styleSlide2.transition = 'transform 0.5s ease-in-out'
  styleSlide2.transform = 'translateX(100%)'
  imageId.value++
}
</script>

<template>
  <div class="slide-container">
    <div class="back" i-ant-design:arrow-left-outlined @click.prevent="actionSlideBack" />
    <div class="forward" i-ant-design:arrow-right-outlined @click.prevent="actionSlideForward" />
    <div class="image-container">
      <img
        v-for="(image, index) of images" :key="`${image}${index}`" :src="image"
        :style="imageId === index ? styleSlide : styleSlide2"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-container {
  flex: 1;
  position: relative;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-container :not(img:first-child) {}

.image-container img:first-child {
  top: 0;
  left: 0;
  transform: translateX(0);
}

img {
  transform: translateX(-100%);
  width: 100%;
  object-fit: contain;
  position: absolute;
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
