<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";
import Hello from "./components/Hello.vue";
const showHelloComp = ref(true);
const count = ref(0);

onBeforeMount(() => {
  console.log("OnBeforeMount Called - Parent");
});
onMounted(() => {
  console.log("OnMounted Called - Parent");
});
onBeforeUpdate(() => {
  console.log("OnBeforeUpdate Called - Parent");
});
onUpdated(() => {
  console.log("OnUpdated Called - Parent");
});
onBeforeUnmount(() => {
  console.log("OnBeforeUnmount Called - Parent");
});
onUnmounted(() => {
  console.log("OnUnmounted Called - Parent");
});
</script>

<template>
  <h1>App Component - Parent</h1>
  <h1>Count: {{ count }}</h1>
  <Hello v-if="showHelloComp" />
  <button @click="showHelloComp = !showHelloComp">Show/Hide</button>
  <button @click="count++">Increase</button>
</template>

<style scoped></style>
