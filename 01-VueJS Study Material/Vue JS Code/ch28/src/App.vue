<!-- App.vue - Parent Component -->
<script setup>
import Hello from "./components/Hello.vue";
import { ref } from "vue";
let count = ref(0);
// function increaseByOne() {
//   count.value++;
//   console.log("Increase by One");
// }

// Event Argument
// function increaseBy11(n) {
//   count.value += n;
//   console.log("Increase by 11");
// }

// Declaring Emitted Events
// const emit = defineEmits(["increaseCount"]);
// console.log(emit);

// Event Validation
// const emit = defineEmits({
//   fsubmit: ({ name }) => {
//     console.log(name);
//     if (name) {
//       return true;
//     } else {
//       console.log("Invalid Submit Event Payload");
//       return false;
//     }
//   },
// });
// function submitForm(name) {
//   emit("fsubmit", { name });
//   console.log("Form Submitted", name);
// }
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <Hello @increaseCount="count++" />
  <!-- <Hello @increase-count="count++" /> -->
  <!-- <Hello @increase-count="increaseByOne" /> -->

  <!-- Event Argument -->
  <!-- <Hello @increase-count="(n) => (count += n)" /> -->
  <!-- <Hello @increase-count="increaseBy11" /> -->

  <!-- Event Validation -->
  <!-- <Hello @fsubmit="submitForm" /> -->

  <!-- Custom Event with v-model -->
  <!-- <Hello /> -->
</template>

<style scoped></style>
