<script setup>
import { ref, onMounted, watchEffect } from "vue";
// Accessing Ref
const inputRef = ref();
console.log(inputRef.value);
onMounted(() => {
  console.log(inputRef.value);
  inputRef.value.focus();
});

// Watching Ref
// const inputRef = ref(null);
// watchEffect(() => {
//   console.log("WatchEffect Called");
//   console.log("InputeRef Value: ", inputRef.value);
//   if (inputRef.value) {
//     console.log(inputRef.value);
//     inputRef.value.focus();
//   } else {
//     console.log("not mounted yet, or the element was unmounted (e.g. by v-if)");
//   }
// });

// Ref inside v-for
// const students = ref(["Sonam", "Rahul", "Rohit"]);
// const studentsRef = ref([]);
// onMounted(() => {
//   console.log(studentsRef.value);
// });
// watchEffect(() => {
//   console.log(studentsRef.value);
// });

// Function Ref
// const students = ref(["Sonam", "Rahul", "Rohit"]);
// const elements = ref([]);
// onMounted(() => {
//   console.log(elements.value);
// });

// function funref(el) {
//   console.log(el);
// }
</script>

<template>
  <!-- Register Ref -->
  <div>
    <label for="username">Username: </label>
    <input type="text" id="username" ref="inputRef" />
  </div>

  <!-- Ref inside v-for -->
  <!-- <h2 v-for="(student, i) in students" :key="i" ref="studentsRef">
    {{ student }}
  </h2> -->

  <!-- Function Ref -->
  <!-- <h2
    v-for="(student, i) in students"
    :key="i"
    :ref="(el) => (elements[i] = el)"
  >
    {{ student }}
  </h2> -->
  <!-- <h2 v-for="(student, i) in students" :key="i" :ref="funref">
    {{ student }}
  </h2> -->
</template>

<style></style>
