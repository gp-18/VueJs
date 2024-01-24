<script setup>
import { inject } from "vue";
// Props
// const props = defineProps(["name"]);

// Inject with Injection Key
const naam = inject("name");

// Inject with Default Value
// const naam = inject("name", "Rahul");

// Inject with function return default value, by passing the 3rd argument
// const naam = inject("name", () => "Rahul", true);

// Multiple Inject
// const naam = inject("name");
// const age = inject("age");
// const course = inject("course");
// const { name, duration } = inject("course");

// Inject Reactive State
// const price = inject("price");

// App Level Provide-Inject
// const website = inject("website");
</script>

<template>
  <!-- Props -->
  <!-- <h2>Name value from App: {{ name }}</h2> -->

  <!-- Using Inject -->
  <h2>Name value from App: {{ naam }}</h2>
  <!-- <h2>Age value from App: {{ age }}</h2> -->
  <!-- <h2>Course Object from App: {{ course }}</h2> -->
  <!-- <h2>Course Name Value from App: {{ name }}</h2> -->
  <!-- <h2>Course Duration Value from App: {{ duration }}</h2> -->

  <!-- Using Reactive State Inject  -->
  <!-- <h2>Price from App: {{ price }}</h2> -->

  <!-- App Level Provide-Inject -->
  <!-- <h2>{{ website }}</h2> -->
</template>

<style scoped></style>
