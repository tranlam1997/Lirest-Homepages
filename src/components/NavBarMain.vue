<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="navi">
    <ul

      m-5 flex-col
    >
      <li
        dark:border="1 white"
        border="2 black"
      >
        <router-link
          to=""
          flex-row
          justify-center
        >
          <p flex-1>
            {{ t('navigator.home') }}
          </p>
          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li
        dark:border="1 white"
        border="2 black"
      >
        <router-link
          to=""
          flex-row
          justify-center
        >
          <p flex-1>
            {{ t('navigator.category') }}
          </p>
          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li
        dark:border="1 white"
        border="2 black"
      >
        <router-link
          to=""
          flex-row
          justify-center
        >
          <p flex-1>
            {{ t('navigator.author') }}
          </p>
          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li
        dark:border="1 white"
        border="2 black"
      >
        <router-link
          to=""
          flex-row
          justify-center
        >
          <p flex-1>
            {{ t('navigator.publisher') }}
          </p>
          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li
        dark:border="1 white"
        border="2 black"
      >
        <router-link
          to=""
          flex-row
          justify-center
        >
          <p flex-1>
            {{ t('navigator.vendor') }}
          </p>

          <div i-akar-icons:arrow-right />
        </router-link>
      </li>
      <li
        dark:border="1 white"
        border="2 black"
      >
        <router-link
          to=""
          flex-row
          justify-center
        >
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
  .navi {
    flex-basis: 20%;
  }

  li {
    list-style: none;
    display: block;
    text-align: left;
    width: 70%;
    margin: 0.5rem 0;
    padding: 0.25rem;
    border-radius: 0.25rem;

    &:hover {
      p ~ div {
        visibility: visible;
      }
    }
  }

  p ~ div {
    transition: all 0.1s ease-in-out;
    align-self: center;
    visibility: hidden;
  }
</style>
