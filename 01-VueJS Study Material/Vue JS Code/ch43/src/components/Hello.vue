<script setup>
import { ref } from "vue";
import Outside from "./Outside.vue";
const isMobile = ref(true);
</script>

<template>
  <h2>Hello Component</h2>

  <!-- Without Teleport -->
  <!-- <Outside /> -->

  <!-- Teleport with Tag -->
  <Teleport to="body">
    <Outside />
  </Teleport>

  <!-- Teleport with Id -->
  <!-- <Teleport to="#outside">
    <Outside />
  </Teleport> -->

  <!-- Disable Teleport -->
  <!-- <Teleport to="#outside" :disabled="isMobile">
    <Outside />
  </Teleport> -->

  <!-- Multiple Teleports on the Same Target -->
  <!-- <Teleport to="#outside">
    <h1>Outside 1</h1>
  </Teleport>
  <Teleport to="#outside">
    <h1>Outside 2</h1>
  </Teleport> -->
</template>

<style></style>
