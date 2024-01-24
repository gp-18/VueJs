<script setup>
import { ref, reactive } from "vue";

// Without Reactivity
let a = 10;
let b = 20;
setTimeout(() => {
  console.log("SetTimeOut Called");
  a = 30;
}, 2000);

// With Reactivity
// let a = ref(10);
// let b = ref(20);
// setTimeout(() => {
//   console.log("SetTimeOut Called");
//   console.log("a", a);
//   console.log("b", b);
//   console.log("a.value", a.value);
//   console.log("b.value", b.value);
//   a.value = 30;
// }, 2000);

// Without Reactivity
// let count = 0;
// setTimeout(() => {
//   console.log("SetTimeOut Called");
//   count++;
// }, 2000);

// With Reactivity
// let count = ref(0);
// setTimeout(() => {
//   console.log("SetTimeOut Called");
//   count.value++;
// }, 2000);

// Object
// let obj1 = ref({ count: 0 });
// setTimeout(() => {
//   console.log("Obj1 SetTimeOut Called");
//   console.log("obj1", obj1);
//   console.log("obj1.value", obj1.value);
//   console.log("obj1.value.count", obj1.value.count);
//   obj1.value.count++;
// }, 2000);

// let obj2 = { count: ref(1) };
// // let { count } = obj2;
// setTimeout(() => {
//   console.log("Obj2 SetTimeOut Called");
//   console.log("obj2", obj2);
//   console.log("obj2.count", obj2.count);
//   console.log("obj2.count.value", obj2.count.value);
//   obj2.count.value++;
// }, 2000);

// let obj3 = ref({ count: ref(0) });
// setTimeout(() => {
//   console.log("Obj3", obj3);
//   console.log("obj3.value", obj3.value);
//   console.log("obj3.value.count", obj3.value.count);
//   obj3.value.count++;
// }, 2000);

// Array
// const students = reactive([ref("Rahul"), ref("Sonam")]);
// setTimeout(() => {
//   console.log("Student SetTimeOut Called");
//   console.log("Students", students);
//   console.log("Students[0]", students[0]);
//   console.log("Students[0].value", students[0].value);
//   console.log("Students[1]", students[1]);
//   console.log("Students[1].value", students[1].value);
//   students.push(ref("Rohit"));
// }, 2000);
</script>

<template>
  <h1>SUM: {{ a + b }}</h1>

  <!-- <h1>Count: {{ count }}</h1> -->

  <!-- <h1>{{ obj1.count }}</h1> -->
  <!-- <h1>{{ obj2.count }}</h1> -->
  <!-- <h1>{{ obj2.count.value }}</h1> -->
  <!-- <h1>{{ obj2.count.value + 5 }}</h1> -->
  <!-- <h1>{{ obj2.count + 5 }}</h1>  It wont Work -->
  <!-- <h1>{{ count + 5 }}</h1> -->

  <!-- <h1>{{ obj3.count }}</h1> -->

  <!-- <h1>{{ students }}</h1> -->
</template>

<style></style>
