<!-- Conditional Rendering -->
<script setup>
import { ref } from "vue";
const isActive = ref(true);
const num = ref(5);
const type = ref("Y");
</script>

<template>
  <!-- v-if Directive -->
  <h1 v-if="true">True v-if</h1>
  <!-- <h1 v-if="isActive">isActive is True v-if</h1> -->
  <!-- <h1 v-if="num === 5">Num is 5 v-if</h1> -->
  <!-- <h1 v-if="num > 5">Num is greater than 5 v-if</h1> -->

  <!-- v-if v-else Directive -->
  <!-- <h1 v-if="isActive">isActive is True v-if</h1>
  <h1 v-else>This is v-else</h1> -->

  <!-- v-if v-else-if v-else Directive-->
  <!-- <h1 v-if="type === 'A'">A</h1>
  <h1 v-else-if="type === 'B'">B</h1>
  <h1 v-else-if="type === 'C'">C</h1>
  <h1 v-else>Not A/B/C</h1> -->

  <!-- v-if directive on template tag -->
  <!-- <template v-if="isActive">
    <h1>Line 1</h1>
    <h1>Line 2</h1>
    <h1>Line 3</h1>
  </template> -->

  <!-- v-if directive on div tag -->
  <!-- <div v-if="isActive">
    <h1>Line 1</h1>
    <h1>Line 2</h1>
    <h1>Line 3</h1>
  </div> -->

  <!-- v-if v-else directive on template tag -->
  <!-- <template v-if="isActive">
    <h1>Line 1</h1>
    <h1>Line 2</h1>
    <h1>Line 3</h1>
  </template>

  <template v-else>
    <h1>Line 4</h1>
    <h1>Line 5</h1>
  </template> -->

  <!-- v-if v-else-if v-else on template Tag -->
  <!-- <template v-if="type === 'A'">
    <h1>Line A 1</h1>
    <h1>Line A 2</h1>
    <h1>Line A 3</h1>
  </template>

  <template v-else-if="type === 'B'">
    <h1>Line B 4</h1>
    <h1>Line B 5</h1>
  </template>

  <template v-else-if="type === 'C'">
    <h1>Line C 6</h1>
    <h1>Line C 7</h1>
  </template>

  <template v-else>
    <h1>Line 8</h1>
    <h1>Line 9</h1>
  </template> -->

  <!-- v-show Directive -->
  <!-- <h1 v-show="true">True v-show</h1> -->
  <!-- <h1 v-show="isActive">isActive is True v-show</h1> -->
  <!-- <h1 v-show="num === 5">Num is 5 v-show</h1> -->
  <!-- <h1 v-show="num > 5">Num is greater than 5 v-show</h1> -->

  <!-- v-if vs v-show -->
  <!-- <h1 v-if="false">True v-if</h1>
  <h1 v-show="false">True v-show</h1> -->
</template>

<style></style>
