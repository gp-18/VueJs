<!-- Methods -->
<script setup>
import { ref } from "vue";
// Without Ref
let firstName = "Sonam";
let lastName = "Sharma";

// Method
function fullName() {
  return firstName + " " + lastName;
}

setTimeout(() => {
  console.log("Settimeout Called");
  firstName = "Rahul";
}, 2000);

// // With Ref
// let firstName = ref("Sonam");
// let lastName = ref("Sharma");

// // Method
// function fullName() {
//   return firstName.value + " " + lastName.value;
// }

// // // Arrow Method
// // const fullName = () => {
// //   return firstName.value + " " + lastName.value;
// // };

// // // Arrow Method with Parameter
// // const fullName = (roll) => {
// //   return firstName.value + " " + lastName.value + " " + "Roll:" + roll;
// // };

// setTimeout(() => {
//   console.log("Settimeout Called");
//   firstName.value = "Rahul";
// }, 2000);
</script>

<template>
  <h1>{{ fullName() }}</h1>
  <!-- <h1>{{ fullName(101) }}</h1> -->
</template>

<style></style>
