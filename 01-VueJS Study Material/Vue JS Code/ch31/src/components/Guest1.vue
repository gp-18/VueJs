<!-- Working with Reactivity -->
<script setup>
import { inject } from "vue";
let count = inject("count");
const increaseCount = inject("increaseCount");
// Mutating Count Value from Injected Component - We need to avoid this
// function handleCount() {
//   console.log("Handle Count Called");
//   count.value++;
// }
</script>
<template>
  <h2>Guest 1 Count: {{ count }}</h2>
  <!-- <button @click="handleCount">Increase from Guest 1</button> -->
  <button @click="increaseCount">Increase from Guest 1</button>
</template>
<style></style>
