<script setup>
import { onMounted, ref } from "vue";
import Hello from "./components/Hello.vue";
import User from "./components/User.vue";
// Ref on Component
// const userRef = ref(null);
// onMounted(() => {
//   console.log(userRef.value);
// });
</script>

<template>
  <Hello />

  <!-- Ref on Component -->
  <!-- <User ref="userRef" /> -->
</template>

<style scoped></style>
