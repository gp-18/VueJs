<!-- Hello.vue - Child Component -->
<script setup>
import { ref } from "vue";
import BaseInput from "./BaseInput.vue";
import CustomInput from "./CustomInput.vue";
import Input from "./Input.vue";
const name = ref("");
const course = ref("");
const fname = ref("");
const lname = ref("");
</script>

<template>
  <button @click="$emit('increaseCount')">Increase</button>

  <!-- Event Argument -->
  <!-- <button @click="$emit('increaseCount', 11)">Increase 11</button> -->

  <!-- Event Validation -->
  <!-- <form @submit.prevent="$emit('fsubmit', name)">
    <label for="name">Name: </label>
    <input type="text" id="name" v-model="name" />
    <button type="submit">Submit</button>
  </form> -->

  <!-- Custom event with v-model -->
  <!-- <form> -->
  <!-- <BaseInput v-model="name" />
    <BaseInput v-model="course" /> -->
  <!-- <CustomInput v-model="name" />
    <CustomInput v-model="course" /> -->
  <!-- </form> -->

  <!-- v-model Argument -->
  <!-- <form @submit.prevent> -->
  <!-- <BaseInput v-model:first-name="fname" /> -->

  <!-- Multiple v-Model Binding -->
  <!-- <BaseInput v-model:first-name="fname" v-model:last-name="lname" /> -->
  <!-- </form> -->

  <!-- v-model Modifiers -->
  <!-- <Input v-model.capitalize="fname" /> -->
</template>

<style></style>
