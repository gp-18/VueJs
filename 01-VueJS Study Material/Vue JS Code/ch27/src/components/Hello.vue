<!-- Hello.vue Child Component -->
<script setup>
import { computed, ref } from "vue";
import { Person } from "../services/Person";
const props = defineProps(["fullName"]);
console.log(props);
// const props = defineProps(["firstName", "lastName"]);
// console.log(props);

// don't do this becoz Props are readonly
// props.firstName = "Rahul";

// You can use it as Local Data Property but it is disconnected from future prop updates.
// const fname = ref(props.firstName);

// You can use it in Computed Propety, It auto-updates when the prop changes.
// const fullName = computed(() => props.firstName + " " + props.lastName);

// Prop Validation
// const props = defineProps(["fullName", "age"]);  // Dont do this
// const props = defineProps({
//   fullName: String,
//   age: Number,
// });

// const props = defineProps({
//   fullName: {
//     type: String,
//     required: true,
//     default: "Sonam Sharma",
//   },
//   age: Number,
// });

// Boolean Casting
// const props = defineProps({
//   isLogout: Boolean,
// });

// Array and Object
// const props = defineProps({
//   cities: Array,
//   employee: Object,
// });

// Binding Multiple Properties Using an Object
// const props = defineProps({
//   name: String,
//   company: String,
// });

// Custom Validator
// const props = defineProps({
//   name: {
//     type: String,
//     // validator(propValue) {
//     //   // The propValue must match one of these strings
//     //   return ["Sonam", "Rahul", "Sumit"].includes(propValue);
//     // },
//     validator: (propValue) => ["Sonam", "Rahul", "Sumit"].includes(propValue),
//   },
//   age: {
//     type: Number,
//     // validator: (propValue) => propValue > 0,
//     validator: (propValue) => {
//       if (propValue >= 18 && propValue <= 30) {
//         return true;
//       }
//       console.error("Age should be 18 - 30");
//       return false;
//     },
//   },
// });

// Custom Class
// const props = defineProps({
//   // author: Person,
//   author: {
//     type: Person,
//     required: true,
//   },
// });
</script>

<template>
  <h1>Name: {{ fullName }}</h1>
  <!-- <h1>First Name: {{ firstName }}</h1>
  <h1>Last Name: {{ lastName }}</h1> -->
  <!-- <h1>F Name: {{ fname }}</h1> -->
  <!-- <h1>Full Name: {{ fullName }}</h1> -->

  <!-- Prop Validation -->
  <!-- <h1>Name: {{ fullName }}, Age: {{ age }}</h1> -->
  <!-- <h1>Name: {{ fullName }}, Age: {{ age + 2 }}</h1> -->

  <!-- Boolean Casting -->
  <!-- <h1>Logout: {{ isLogout }}</h1> -->

  <!-- Array and Object -->
  <!-- <h1>Cities: {{ cities }}</h1>
  <h1 v-for="city in cities">City: {{ city }}</h1> -->

  <!-- <h1>Employee: {{ employee }}</h1>
  <h1>Employee: {{ employee.name }} {{ employee.company }}</h1> -->

  <!-- Binding Multiple Properties Using an Object -->
  <!-- <h1>Employee: {{ name }} {{ company }}</h1> -->

  <!-- Custom Validator -->
  <!-- <h1>Name: {{ name }} Age:{{ age }}</h1> -->

  <!-- Custom Class -->
  <!-- <h1>Author Person Name: {{ author.firstName }} {{ author.lastName }}</h1> -->
</template>

<style></style>
