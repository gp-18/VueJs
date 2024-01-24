<script setup>
import {
  ref,
  reactive,
  isRef,
  isReactive,
  isProxy,
  unref,
  toRef,
  toRefs,
} from "vue";

let a = 10;
let b = ref(10);
let num = reactive({ count: 1 });
let student = reactive({
  name: "Sonam",
  roll: 101,
});
console.log("a:", a);
console.log("is a Ref:", isRef(a));
console.log("b:", b);
console.log("is b Ref:", isRef(b));
// console.log("num", num);
// console.log("is num Reactive", isReactive(num));
// console.log("is num Return Proxy", isProxy(num));
// console.log("b:", unref(b));

// console.log("Student", student);
// console.log("is Student Reactive", isReactive(student));
// console.log("Student.name", student.name);
// console.log("is Student.name Reactive", isReactive(student.name));
// console.log("is Student.name Ref", isRef(student.name));

// let nameRef = toRef(student, "name");
// console.log("nameRef", nameRef);
// console.log("is nameRef Ref", isRef(nameRef));

// let StudentAsRefs = toRefs(student);
// console.log("After toRefs");
// console.log("StudentAsRefs", StudentAsRefs);
// console.log("is StudentAsRefs.name Ref", isRef(StudentAsRefs.name));
// console.log("StudentAsRefs.name.value", StudentAsRefs.name.value);
// console.log("StudentAsRefs.roll.value", StudentAsRefs.roll.value);
</script>

<template></template>

<style></style>
