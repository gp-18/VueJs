<script setup>
import { reactive } from "vue";
// Without Reactivity
let num = { a: 10, b: 20 };
setTimeout(() => {
  console.log("Settimeout Called");
  console.log("Num", num);
  num.a = 30;
  console.log("a:", num.a);
}, 2000);

// With Reactivity
// let num = reactive({ a: 10, b: 20 });
// setTimeout(() => {
//   console.log("Settimeout Called");
//   console.log("Num", num);
//   num.a = 30;
//   console.log("a:", num.a);
// }, 2000);

// Without Reactivity
// let count = 0;
// setTimeout(() => {
//   console.log("Settimeout Called");
//   count++;
//   console.log("Count:", count);
// }, 2000);

// With Reactivity
// let num = reactive({ count: 0 });
// setTimeout(() => {
//   console.log("Settimeout Called");
//   console.log("Num", num);
//   num.count++;
//   console.log("Count:", num.count);
// }, 2000);

// Deep Reactivity
// const obj = reactive({
//   num: { count: 0 },
//   user: ["Rahul", "Sonam"],
// });
// setTimeout(() => {
//   console.log("Settimeout Called");
//   console.log("OBJ", obj);
//   console.log("obj.num", obj.num);
//   console.log("obj.user", obj.user);
//   obj.num.count++;
//   obj.user.push("Rohit");
// }, 2000);
</script>

<template>
  <!-- Without and With Reactivity -->
  <h1>SUM: {{ num.a + num.b }}</h1>

  <!-- <h1>Count: {{ count }}</h1> -->
  <!-- <h1>Count: {{ num.count }}</h1> -->

  <!-- <h1>Count: {{ obj.num.count }}</h1>
  <h1>User: {{ obj.user }}</h1> -->
</template>

<style></style>
