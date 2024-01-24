<!-- Computed Property -->
<script setup>
import { ref, computed } from "vue";
// Without Ref
let firstName = "Sonam";
let lastName = "Sharma";

// Computed Property
const fullName = computed(() => {
  return firstName + " " + lastName;
});

setTimeout(() => {
  console.log("Settimeout Called");
  firstName = "Rahul";
}, 2000);

// // With Ref
// let firstName = ref("Sonam");
// let lastName = ref("Sharma");

// // Computed Property
// const fullName = computed(() => {
//   console.log("Getter Called");
//   return firstName.value + " " + lastName.value;
// });

// setTimeout(() => {
//   console.log("Settimeout Called");
//   firstName.value = "Rahul";
// }, 2000);
</script>

<template>
  <h1>{{ fullName }}</h1>
</template>

<style></style>
