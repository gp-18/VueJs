<script setup>
import Hello from "./components/Hello.vue";
import { useCssModule } from "vue";
// console.log(useCssModule("classes"));
console.log(useCssModule());
</script>

<template>
  <Hello />
  <h1 :class="$style.bgBlue">App Component</h1>

  <!-- Custom Inject Name -->
  <!-- <h1 :class="classes.bgBlue">App Component</h1> -->
</template>

<!-- CSS Module -->
<style module>
.bgBlue {
  background-color: blue;
}
</style>

<!-- Custom Inject Name -->
<!-- <style module="classes">
.bgBlue {
  background-color: blue;
}
</style> -->
