<script setup>
import { ref } from "vue";
const googleURL = ref("https://google.com");
</script>

<template>
  <!-- Using URL -->
  <a href="https://www.geekyshows.com" target="_blank">Visit GeekyShows</a>

  <br />

  <!-- Using State URL -->
  <a :href="googleURL" target="_blank">Visit Google</a>
</template>

<style></style>
