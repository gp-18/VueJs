<script setup>
import Hello from "./components/Hello.vue";
</script>

<template>
  <Hello />
  <h1 class="bg-blue text-red">App Component</h1>
</template>

<style scoped>
.bg-blue {
  background-color: blue;
}

/* Deep Selector */
/* .bg-blue,
:deep(.bg-blue) {
  background-color: blue;
} */

/* Global Selector */
/* :global(.text-red) {
  color: red;
} */
</style>
