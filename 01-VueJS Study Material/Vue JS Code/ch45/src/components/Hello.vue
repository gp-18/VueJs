<script setup>
import { ref } from "vue";

const girlImage = ref(
  "https://cdn.pixabay.com/photo/2022/09/16/08/48/girl-7458180_960_720.jpg"
);
</script>

<template>
  <!-- Using Images -->
  <img src="../assets/images/girl.jpg" alt="girl" width="200" height="300" />

  <!-- Using Network Images -->
  <img
    src="https://cdn.pixabay.com/photo/2022/06/15/13/39/man-7263965_960_720.png"
    alt="girl"
    width="300"
    height="300"
  />

  <!-- Using State Images -->
  <img :src="girlImage" alt="girl" width="200" height="300" />
</template>

<style></style>
