<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div border="1 red-800" sticky>
    <ul flex-col m-5>
      <li>
        <router-link to="" flex-row justify-center>
          <p flex-1>
            {{ t('navigator.home') }}
          </p>
          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li>
        <router-link to="" flex-row justify-center>
          <p flex-1>
            {{ t('navigator.category') }}
          </p>
          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li>
        <router-link to="" flex-row justify-center>
          <p flex-1>
            {{ t('navigator.author') }}
          </p>
          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li>
        <router-link to="" flex-row justify-center>
          <p flex-1>
            {{ t('navigator.publisher') }}
          </p>
          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li>
        <router-link to="" flex-row justify-center>
          <p flex-1>
            {{ t('navigator.vendor') }}
          </p>

          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li>
        <router-link to="" flex-row justify-center>
          <p flex-1>
            {{ t('navigator.auction') }}
          </p>
          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
li {
  list-style: none;
  display: block;
  width: 15%;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  padding: 0.25rem;
  border: 2px solid white;

  &:hover {
    p~div {
      visibility: visible;
    }
  }
}

p~div {
  transition: all 0.1s ease-in-out;
  align-self: center;
  visibility: hidden;
}
</style>
