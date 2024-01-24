<!-- Text Interpolation -->
<script setup>
const msg = "Learn Vue JS by GeekyShows";
const num = 10;
const on = false;
function disp() {
  console.log("Hello from Disp");
}
</script>

<template>
  <h1>Text Interpolation</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ 10 + 10 }}</h1>
  <h1>{{ num + 20 }}</h1>
  {{ disp() }}
  {{ on ? "Dark" : "Light" }}
</template>

<style></style>
