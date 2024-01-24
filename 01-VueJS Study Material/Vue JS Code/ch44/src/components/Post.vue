<script setup>
import { ref } from "vue";
const data = ref(null);
const error = ref(null);
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const resData = await res.json();
  data.value = resData;
} catch (err) {
  error.value = err;
}

// Error Handling using Hook
// const res = await fetch("https://jsonplaeholder.typicode.com/posts/");
// const resData = await res.json();
// data.value = resData;
</script>

<template>
  <h3 v-if="data">{{ data }}</h3>
  <h3 v-if="error">{{ error }}</h3>
</template>

<style></style>
