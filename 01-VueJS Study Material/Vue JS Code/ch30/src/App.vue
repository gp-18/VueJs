<!-- Fallthrough Attributes -->
<script setup>
import { ref } from "vue";
import Hello from "./components/Hello.vue";
const btnBGPink = ref("pink");
function btnClick() {
  console.log("App Button Clicked");
}
</script>

<template>
  <!-- Attribute Inheritance -->
  <Hello class="btn-pink" />
  <!-- <Hello id="app-id" /> -->
  <!-- <Hello :style="{ backgroundColor: btnBGPink }" /> -->
  <!-- <Hello @click="btnClick" /> -->

  <!-- Merging -->
  <!-- <Hello class="btn-pink" /> -->
  <!-- <Hello id="app-id" /> -->
  <!-- <Hello :style="{ backgroundColor: btnBGPink }" /> -->
  <!-- <Hello @click="btnClick" /> -->

  <!-- Attribute Inheritance - Nested Component Inheritance -->
  <!-- <Hello class="btn-pink" /> -->
  <!-- <Hello id="app-id" /> -->
  <!-- <Hello :style="{ backgroundColor: btnBGPink }" /> -->
  <!-- <Hello @click="btnClick" /> -->

  <!-- Merging - Nested Component Inheritance -->
  <!-- <Hello class="btn-pink" /> -->
  <!-- <Hello id="app-id" /> -->
  <!-- <Hello :style="{ backgroundColor: btnBGPink }" /> -->
  <!-- <Hello @click="btnClick" /> -->

  <!-- Disabling Attribute Inheritance -->
  <!-- <Hello class="btn-pink" /> -->

  <!-- $attrs Object -->
  <!-- <Hello class="btn-pink" :style="{ backgroundColor: btnBGPink }" /> -->

  <!-- Attribute Inheritance on Multiple Root Nodes -->
  <!-- <Hello class="f-50" /> -->

  <!-- Accessing Fallthrough Attributes in JavaScript -->
  <!-- <Hello class="f-50" /> -->
</template>

<style scoped></style>
