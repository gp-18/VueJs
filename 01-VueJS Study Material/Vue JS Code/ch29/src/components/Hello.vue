<script setup>
// Props
const props = defineProps(["name"]);
</script>

<template>
  <!-- Props -->
  <!-- <h1>{{ name }}</h1> -->

  <!-- Slot -->
  <slot></slot>

  <!-- Fallback Content/ Default Content -->
  <!-- <slot></slot> -->
  <!-- <slot><h1>Rahul</h1></slot> -->

  <!-- Scoped Slot - Single Slot Default -->
  <!-- <slot nm="Sonam" :age="27"></slot> -->
</template>

<style></style>
