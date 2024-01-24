<!-- v-bind in CSS -->
<script setup>
import Hello from "./components/Hello.vue";
const theme = { textColor: "red" };
</script>

<template>
  <Hello />
  <h1 class="text-red">App Component</h1>
</template>

<style scoped>
.text-red {
  color: v-bind("theme.textColor");
}
</style>
