<script setup>
import { ref } from "vue";

const users = ref(["Sonam", "Rahul", "Rohit"]);
</script>

<template>
  <h3 v-for="(user, i) in users" :key="i">
    {{ user }}
  </h3>
</template>

<style></style>
