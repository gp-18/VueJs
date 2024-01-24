<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

onBeforeMount(() => {
  console.log("OnBeforeMount Called - Child");
});
onMounted(() => {
  console.log("OnMounted Called - Child");
});
onBeforeUpdate(() => {
  console.log("OnBeforeUpdate Called - Child");
});
onUpdated(() => {
  console.log("OnUpdated Called - Child");
});
onBeforeUnmount(() => {
  console.log("OnBeforeUnmount Called - Child");
});
onUnmounted(() => {
  console.log("OnUnmounted Called - Child");
});
</script>

<template>
  <h2>Hello Component - Child</h2>
</template>

<style></style>
