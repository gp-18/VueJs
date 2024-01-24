<script setup>
import { ref, useAttrs } from "vue";
import CustomButton from "./CustomButton.vue";

const btnTextWhite = ref("white");
function helloBtnClick() {
  console.log("Hello Button Clicked");
}

// Accessing Fallthrough Attributes in JavaScript
// const attrs = useAttrs();
// console.log(attrs);
</script>

<!-- Disabling Attribute Inheritance -->
<!-- <script>
export default {
  inheritAttrs: false,
};
</script> -->

<!-- Attribute Inheritance on Multiple Root Nodes -->
<!-- <script>
export default {
  inheritAttrs: false,
};
</script> -->

<template>
  <!-- Attribute Inheritance -->
  <button>Click</button>

  <!-- Inherit in Root Element -->
  <!-- <div>
    <button>Click 1</button>
    <button>Click 2</button>
  </div> -->

  <!-- Merging -->
  <!-- <button class="btn">Click</button> -->
  <!-- <button id="hello-id">Click</button> -->
  <!-- <button :style="{ color: btnTextWhite }">Click</button> -->
  <!-- <button @click="helloBtnClick">Click</button> -->

  <!--  Nested Component Inheritance -->
  <!-- <CustomButton /> -->

  <!-- Disabling Attribute Inheritance -->
  <!-- <button>Click</button> -->

  <!-- $attrs Object -->
  <!-- <h2>Fallthrough Attributes: {{ $attrs }}</h2> -->
  <!-- <div>
    <button>Click 1</button>
    <button v-bind="$attrs">Click 2</button>
  </div> -->

  <!-- Attribute Inheritance on Multiple Root Nodes -->
  <!-- <h1>Hello 1</h1>
  <h2 v-bind="$attrs">Hello 2</h2>
  <h3>Hello 3</h3> -->

  <!-- Accessing Fallthrough Attributes in JavaScript -->
  <!-- <h1>Hello</h1> -->
</template>

<style></style>
