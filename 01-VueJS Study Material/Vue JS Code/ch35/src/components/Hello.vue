<script setup>
import { defineAsyncComponent, ref } from "vue";
// import Users from "./Users.vue";
import UsersLoading from "../components/UsersLoading.vue";
import UsersError from "../components/UsersError.vue";
// Async Component
const showUserComp = ref(false);
const AsyncUserComp = defineAsyncComponent(() =>
  import("../components/Users.vue")
);

// Async Component - Loading and Error State
// const showUserComp = ref(false);
// const AsyncUserComp = defineAsyncComponent({
//   // Loader Function
//   loader: () => import("../components/Users.vue"),
//   // A component to use while the async component is loading
//   loadingComponent: UsersLoading,
//   // Delay before showing the loading component. Default: 200ms
//   // delay: 2000,
//   // A component to use if the load fails
//   errorComponent: UsersError,
//   // The error component will be displayed if a timeout is provided and exceeded. Default: Infinity.
//   timeout: 20,
// });
</script>

<template>
  <h2>Hello Component</h2>
  <!-- Async Component -->
  <button @click="showUserComp = !showUserComp">
    Show/Hide User Component
  </button>
  <AsyncUserComp v-if="showUserComp" />

  <!-- Global Async Component -->
  <!-- <AsyncGlobalUserComp /> -->

  <!-- Async Component  - Loading and Error State -->
  <!-- <button @click="showUserComp = !showUserComp">
    Show/Hide User Component
  </button>
  <AsyncUserComp v-if="showUserComp" /> -->
</template>

<style></style>
