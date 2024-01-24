<script setup>
// Without Composable we can't reuse same logic
// import { ref, onMounted, onUnmounted } from "vue";
// import { faker } from "@faker-js/faker";
// const firstName = ref();
// const lastName = ref();
// function updateName() {
//   firstName.value = faker.name.firstName();
//   lastName.value = faker.name.lastName();
// }

// onMounted(() => window.addEventListener("mousemove", updateName));
// onUnmounted(() => window.removeEventListener("mousemove", updateName));

// Using Composable Function
import { useName } from "../composables/name.js";
const { firstName, lastName } = useName();

// Composable Function with Argument
// import { useFetch } from "../composables/fetch.js";
// let url = "https://jsonplaceholder.typicode.com/posts/1";
// const { data, error } = useFetch(url);
// function changeUrl() {
//   url = "https://dummyjson.com/products/1";
// }

// Composable Function with ref
// import { ref } from "vue";
// import { useFetch } from "../composables/fetch1.js";
// let url = ref("https://jsonplaceholder.typicode.com/posts/1");
// const { data, error } = useFetch(url);
// function changeUrl() {
//   url.value = "https://dummyjson.com/products/1";
// }
</script>

<template>
  <h2>Hello Component</h2>
  <h2>Full Name: {{ firstName }} {{ lastName }}</h2>

  <!-- Composable Function with Argument -->
  <!-- <div v-if="error">Oops! Error encountered: {{ error }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>
  <button @click="changeUrl">Change URL</button> -->

  <!-- Composable Function with ref -->
  <!-- <div v-if="error">Oops! Error encountered: {{ error }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>
  <button @click="changeUrl">Change URL</button> -->
</template>

<style></style>
