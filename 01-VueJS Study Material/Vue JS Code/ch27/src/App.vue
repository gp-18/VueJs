<!-- App.vue Parent Component -->
<script setup>
import { ref } from "vue";
import Hello from "./components/Hello.vue";
import { Person } from "./services/Person";

const firstName = ref("Sonam");
const lastName = ref("Kumari");

// Binding Multiple Properties Using an Object
// const employee = {
//   name: "Rahul",
//   company: "HCL",
// };

// Custom Class
// const person = new Person("Sonam", "Kumari");
</script>

<template>
  <!-- Static Prop -->
  <Hello fullName="Sonam Kumari" />
  <!-- <Hello full-name="Sonam Kumari" /> -->

  <!-- Dynamic Prop -->
  <!-- <Hello :first-name="firstName" :last-name="lastName" /> -->

  <!-- Prop Validation -->
  <!-- <Hello full-name="Sonam Kumari" age="27" /> -->
  <!-- <Hello full-name="Sonam Kumari" :age="27" /> -->
  <!-- <Hello full-name="Sonam Kumari" :age="27" /> -->

  <!-- Boolean Casting -->
  <!-- <Hello is-logout="true" /> -->
  <!-- <Hello :is-logout="true" /> -->
  <!-- <Hello is-logout /> -->
  <!-- <Hello /> -->

  <!-- Array and Object -->
  <!-- <Hello
    :cities="['Ranchi', 'Bokaro', 'Dhanbad']"
    :employee="{ name: 'Sonam', company: 'HCL' }"
  /> -->

  <!-- Binding Multiple Properties Using an Object -->
  <!-- <Hello v-bind="employee" /> -->
  <!-- <Hello name="Rahul" company="HCL" /> -->
  <!-- <Hello :name="employee.name" :company="employee.company" /> -->

  <!-- Custom Validator -->
  <!-- <Hello name="Sonam" :age="35" /> -->

  <!-- Custom Class -->
  <!-- <Hello :author="person" /> -->
</template>

<style scoped></style>
