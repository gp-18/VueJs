<script setup>
import { ref } from "vue";
const btnTextWhite = ref("white");
function CustomBtnClick() {
  console.log("Custom Button Clicked");
}
</script>
<template>
  <!-- Attribute Inheritance - Nested Component Inheritance -->
  <button>Custom Button</button>

  <!-- Merging - Nested Component Inheritance -->
  <!-- <button class="btn">Custom Button</button> -->
  <!-- <button id="cb-id">Custom Button</button> -->
  <!-- <button :style="{ color: btnTextWhite }">Click</button> -->
  <!-- <button @click="CustomBtnClick">Custom Button</button> -->
</template>
<style></style>
