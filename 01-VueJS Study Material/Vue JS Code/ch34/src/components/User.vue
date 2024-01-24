<script setup>
import { ref } from "vue";

const count = ref(10);
const a = 20;
function increaseCount() {
  count.value++;
}

defineExpose({
  count,
  a,
  increaseCount,
});
</script>
<template>
  <h2>User Component</h2>
  <h3>Count:{{ count }}</h3>
  <h3>A:{{ a }}</h3>
  <button @click="increaseCount">Increase</button>
</template>
<style></style>
