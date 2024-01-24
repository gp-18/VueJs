<script setup>
import { ref, reactive, computed } from "vue";
// Binding to Objects
const isActive = ref(true);
const isImportant = ref(true);

const classObj = reactive({
  active: true,
  "f-bold": true,
  iText: false,
});
// Computed Property
const myClass = computed(() => ({
  active: isActive.value,
  "f-bold": isImportant.value,
}));

// Binding to Array
const currentTabBG = ref("bg-green");
const errorClass = ref("text-red");
</script>

<template>
  <h1 class="text-red">Hello 1</h1>
  <h1 class="text-red f-bold">Hello 2</h1>
  <!-- Binding to Objects -->
  <h1 v-bind:class="{ active: isActive }">Hello 3</h1>
  <h1 :class="{ active: isActive }">Hello 4</h1>
  <h1 class="text-red" :class="{ active: isActive }">Hello 5</h1>
  <h1 :class="{ active: isActive, fBold: isImportant }">Hello 6</h1>
  <h1 :class="{ active: isActive, 'f-bold': isImportant }">Hello 7</h1>
  <h1 :class="classObj">Hello 8</h1>
  <h1 :class="myClass">Hello 9</h1>

  <!-- Binding to Array -->
  <h1 :class="[currentTabBG, errorClass]">Hello 10</h1>
  <h1 :class="[isActive ? currentTabBG : '', errorClass]">Hello 11</h1>
  <h1 :class="[{ 'bg-black': isActive }, errorClass]">Hello 12</h1>
</template>

<style></style>
