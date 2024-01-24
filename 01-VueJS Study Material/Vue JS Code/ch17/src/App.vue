<script setup>
import { ref } from "vue";
import Hello from "./components/Hello.vue";
const isActive = ref(true);
</script>

<template>
  <Hello class="app-class" />
  <!-- <Hello :class="{ active: isActive }" /> -->
</template>

<style scoped></style>
