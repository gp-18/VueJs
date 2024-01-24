<script setup>
import User from "./components/User.vue";
import { provide, ref, readonly } from "vue";
import { myInjectionKey } from "./utilities/keys";
// Provide
provide("name", "Sonam");
// provide("age", 27);
// provide("course", {
//   name: "Vue JS",
//   duration: "6 Months",
// });

// Provide Reactive State
// const price = ref(100);
// provide("price", price);

// Working with Reactivity
// const count = ref(0);
// function increaseCount() {
//   console.log("Increase Count Called");
//   count.value++;
// }
// provide("count", count);
// provide("count", readonly(count));
// provide("increaseCount", increaseCount);

// Working with Symbol Keys
// provide(myInjectionKey, {
//   cart: 5,
//   product: "iPhone",
// });
</script>

<template>
  <!-- Props -->
  <!-- <User name="Sonam" /> -->

  <!-- Provide -->
  <User />

  <!-- Working with Reactivity -->
  <!-- <h2>App Count: {{ count }}</h2> -->
  <!-- <button @click="increaseCount">Increase from App</button> -->
  <!-- <User /> -->

  <!-- Working with Symbol Keys -->
  <!-- <User /> -->
</template>

<style scoped></style>
