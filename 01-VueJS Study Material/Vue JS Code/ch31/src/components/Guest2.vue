<!-- Working with Symbol Keys -->
<script setup>
import { inject } from "vue";
import { myInjectionKey } from "../utilities/keys";
const injected = inject(myInjectionKey);
</script>
<template>
  <h1>{{ injected }}</h1>
</template>
<style></style>
