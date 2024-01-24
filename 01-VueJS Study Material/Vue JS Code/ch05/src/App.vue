<script setup>
import HelloWorld from "./components/HelloWorld.vue";
const name = "GeekyShows";
</script>

<template>
  <div>
    <h1>Local Registration by {{ name }}</h1>
    <HelloWorld />
  </div>
</template>

<style scoped>
h1 {
  font-size: 90px;
}
</style>
