<!-- Writable Computed Property -->
<script setup>
import { ref, computed, isRef } from "vue";

let firstName = ref("Sonam");
let lastName = ref("Sharma");

// Computed Property
const fullName = computed({
  // getter
  get() {
    console.log("Getter Called");
    return firstName.value + " " + lastName.value;
  },

  // Setter
  set(newValue) {
    console.log("Setter Called");
    // we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});

setTimeout(() => {
  console.log("Settimeout Called");
  fullName.value = "Rahul Kumar";
}, 2000);
</script>

<template>
  <h1>{{ fullName }}</h1>
</template>

<style></style>
