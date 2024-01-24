<script setup>
import { onErrorCaptured } from "vue";
import Post from "./Post.vue";
// Suspense Events
function onPending() {
  console.log("Pending...");
}
function onResolve() {
  console.log("Resolve...");
}
function onFallback() {
  console.log("Fallback...");
}

// Error Handling
onErrorCaptured((err, ins, info) => {
  console.log("onErrorCaptured Called...");
  console.log("Error:", err);
  console.log("Component instance that triggered the Error:", ins);
  console.log("An information string specifying the error source type:", info);
});
</script>

<template>
  <!-- Suspense -->
  <Suspense>
    <template #default>
      <Post />
    </template>
    <template #fallback>
      <h3>loading...</h3>
    </template>
  </Suspense>

  <!-- Suspense Events-->
  <!-- <Suspense @pending="onPending" @resolve="onResolve" @fallback="onFallback">
    <template #default>
      <Post />
    </template>
    <template #fallback>
      <h3>loading...</h3>
    </template>
  </Suspense> -->
</template>

<style></style>
