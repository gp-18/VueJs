<script setup>
import { ref, reactive, computed } from "vue";
import Home from "./Home.vue";
// Array of Strings
const students = ref(["Rahul", "Sonam", "Rohit"]);

// Array of Objects
const employees = ref([
  { name: "Sumit", salary: 10000 },
  { name: "Kunal", salary: 20000 },
  { name: "Ali", salary: 30000 },
]);

// Array of Arrays
const languages = ref([
  ["Java", "Android"],
  ["Python", "ML"],
  ["Dart", "Flutter"],
]);

// Object - key value pair
const course = reactive({
  title: "Learn Vue JS",
  author: "GeekyShows",
  duration: "6 Months",
});

// Object of Objects
const frameworks = reactive({
  vuejs: {
    id: 1,
    title: "Learn Vue JS",
    author: "GeekyShows",
    fees: 100,
  },
  django: {
    id: 2,
    title: "Learn Django step by step",
    author: "GeekyShows",
    fees: 200,
  },
  laravel: {
    id: 3,
    title: "Learn Laravel in easy steps",
    author: "GeekyShows",
    fees: 300,
  },
});

// Computed Property
const salaryGreaterThanTenThousandOne = computed(() => {
  return employees.value.filter((employee) => employee.salary > 10001);
});
// const salaryGreaterThanTenThousandOne = computed(() => {
//   return employees.value.filter(({ salary }) => salary > 10001);
// });

// Method
function highSalary(emps) {
  return emps.filter((emp) => emp.salary > 10001);
}
</script>

<template>
  <!-- Array of Strings -->
  <h1 v-for="student in students">{{ student }}</h1>
  <!-- <h1 v-for="(student, i) in students">{{ i }} {{ student }}</h1> -->
  <!-- <h1 v-for="(student, i) in students" :key="i">{{ i }} {{ student }}</h1> -->

  <!-- Array of Objects -->
  <!-- <h1 v-for="employee in employees">
    {{ employee.name }} {{ employee.salary }}
  </h1> -->
  <!-- <h1 v-for="(employee, i) in employees">
    {{ i }} {{ employee.name }} {{ employee.salary }}
  </h1> -->
  <!-- <h1 v-for="(employee, i) in employees" :key="i">
    {{ i }} {{ employee.name }} {{ employee.salary }}
  </h1> -->
  <!-- Destructuring -->
  <!-- <h1 v-for="{ name, salary } in employees">{{ name }} {{ salary }}</h1> -->
  <!-- <h1 v-for="({ name, salary }, i) in employees">
    {{ i }} {{ name }} {{ salary }}
  </h1> -->
  <!-- <h1 v-for="({ name, salary }, i) in employees" :key="i">
    {{ i }} {{ name }} {{ salary }}
  </h1> -->

  <!-- Array of Arrays or Nested v-for -->
  <!-- <div v-for="language in languages">
    <h1 v-for="item in language">{{ item }}</h1>
  </div> -->
  <!-- <template v-for="language in languages">
    <h1 v-for="item in language">{{ item }}</h1>
  </template> -->
  <!-- <template v-for="(language, outterIndex) in languages">
    <h1 v-for="(item, innerIndex) in language">
      {{ outterIndex }} {{ innerIndex }} {{ item }}
    </h1>
  </template> -->
  <!-- <template v-for="(language, outterIndex) in languages" :key="outterIndex">
    <h1 v-for="(item, innerIndex) in language">
      {{ outterIndex }} {{ innerIndex }} {{ item }}
    </h1>
  </template> -->

  <!-- Block of Multiple Elements -->
  <!-- <template v-for="(language, outterIndex) in languages" :key="outterIndex">
    <h1 v-for="item in language">{{ item }}</h1>
    <hr />
  </template> -->

  <!-- Object - key value pair -->
  <!-- <h1 v-for="value in course">{{ value }}</h1> -->
  <!-- <h1 v-for="(value, k) in course">{{ k }}: {{ value }}</h1> -->
  <!-- <h1 v-for="(value, k, i) in course">{{ i }} {{ k }}: {{ value }}</h1> -->
  <!-- <h1 v-for="(value, k, i) in course" :key="i">{{ i }} {{ k }}: {{ value }}</h1> -->

  <!-- Object of Objects -->
  <!-- <h1 v-for="framework in frameworks">
    {{ framework.id }} {{ framework.title }} {{ framework.author }}
    {{ framework.fees }}
  </h1> -->
  <!-- <h1 v-for="framework in frameworks" :key="framework.id">
    {{ framework.id }} {{ framework.title }} {{ framework.author }}
    {{ framework.fees }}
  </h1> -->
  <!-- <h1 v-for="{ id, title, author, fees } in frameworks" :key="id">
    {{ id }} {{ title }} {{ author }} {{ fees }}
  </h1> -->
  <!-- <div v-for="framework in frameworks" :key="framework.id">
    <h1 v-for="value in framework">{{ value }}</h1>
  </div> -->
  <!-- <div v-for="framework in frameworks" :key="framework.id">
    <h1 v-for="(value, k) in framework">{{ k }}: {{ value }}</h1>
  </div> -->
  <!-- <div v-for="framework in frameworks" :key="framework.id">
    <h1 v-for="(value, k, i) in framework">{{ i }} {{ k }}: {{ value }}</h1>
  </div> -->

  <!-- v-for with Range -->
  <!-- <h1 v-for="n in 5">{{ n }}</h1> -->
  <!-- <h1 v-for="n in 5" :key="n">{{ n }}</h1> -->
  <!-- <template v-for="n in 5" :key="n">
    <h1>Price</h1>
  </template> -->

  <!-- v-for with v-if -->
  <!-- Below Example will not work -->
  <!-- <h1 v-for="({ name, salary }, i) in employees" :key="i" v-if="salary > 10001">
    {{ name }} {{ salary }}
  </h1> -->

  <!-- Below Example will work -->
  <!-- <template v-for="({ name, salary }, i) in employees" :key="i">
    <h1 v-if="salary > 10001">{{ name }} {{ salary }}</h1>
  </template> -->

  <!-- v-for with computed property -->
  <!-- <h1 v-for="employee in salaryGreaterThanTenThousandOne">
    {{ employee.name }} {{ employee.salary }}
  </h1> -->
  <!-- <h1 v-for="(employee, i) in salaryGreaterThanTenThousandOne" :key="i">
    {{ employee.name }} {{ employee.salary }}
  </h1> -->
  <!-- <h1 v-for="({ name, salary }, i) in salaryGreaterThanTenThousandOne" :key="i">
    {{ name }} {{ salary }}
  </h1> -->

  <!-- v-for with Method -->
  <!-- <h1 v-for="({ name, salary }, i) in highSalary(employees)" :key="i">
    {{ name }} {{ salary }}
  </h1> -->

  <!-- v-for with Component -->
  <!-- <Home v-for="n in 5" :key="n" /> -->
  <!-- <Home v-for="(student, i) in students" :key="i" :item="student" /> -->

  <!-- v-for of -->
  <!-- <h1 v-for="student of students">{{ student }}</h1> -->
</template>

<style></style>
