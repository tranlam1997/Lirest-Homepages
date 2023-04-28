<script setup lang="ts"></script>

<template>
  <div
    class="footer"
    flex-row
    justify-around
    text-white
  >
    <div
      class="basis-2/5"
      flex-col
      items-start
    >
      <LirestPersonalLogo mb-2 />
      <p>&copy; 2022 FQÉT, Inc.</p>
    </div>

    <div
      flex-col
      items-start
    >
      <p>About us</p>
      <p>Guide</p>
      <p>Contact</p>
    </div>

    <div
      flex-col
      items-start
    >
      <p>Home</p>
      <p>Category</p>
      <p>Author</p>
      <p>Publisher</p>
      <p>Vendor</p>
      <p>Auction</p>
    </div>

    <div
      flex-col
      items-start
    >
      <p>Terms Of Service</p>
      <p>Privacy</p>
      <p>Docs</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .footer {
    background-image: linear-gradient(to right, #868f96, #596164);
    margin: 3rem auto;
    width: 60%;
    height: 200px;
    opacity: 0.8;
    padding: 1rem 2rem;
    clip-path: polygon(
      5% 0%,
      100% 0%,
      100% 20%,
      100% 80%,
      95% 100%,
      0% 100%,
      0% 80%,
      0% 0%
    );
  }

  div > p {
    cursor: pointer;

    &:hover {
      color: rgb(184, 176, 176);
      text-decoration: underline;
    }
  }
</style>
