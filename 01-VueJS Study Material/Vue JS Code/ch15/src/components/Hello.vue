<!-- Binding Inline Style -->
<script setup>
import { ref, reactive } from "vue";
// Binding to Object
const cl = ref("red");
const bg = ref("green");

const styleObj = reactive({
  color: "yellow",
  backgroundColor: "green",
});

// Binding to Array
const myStyle = reactive({
  fontSize: "100px",
});
</script>

<template>
  <h1 style="color: red; background-color: blueviolet">Hello 1</h1>
  <h1 v-bind:style="{ color: 'red', backgroundColor: 'blue' }">Hello 2</h1>
  <h1 v-bind:style="{ color: 'red', 'background-color': 'yellow' }">Hello 3</h1>
  <h1 :style="{ color: 'red', backgroundColor: 'blue' }">Hello 4</h1>
  <h1 :style="{ color: 'red', 'background-color': 'yellow' }">Hello 5</h1>

  <!-- Binding to Object -->
  <h1 :style="{ color: cl, backgroundColor: bg }">Hello 6</h1>
  <h1 :style="styleObj">Hello 7</h1>

  <!-- Binding to Array -->
  <h1 :style="[styleObj, myStyle]">Hello 8</h1>
</template>

<style></style>
