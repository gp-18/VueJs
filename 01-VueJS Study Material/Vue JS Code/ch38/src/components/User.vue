<script setup>
import { inject } from "vue";

const web = inject("website");
</script>
<template>
  <h2>User Component</h2>
  <h2>Provided Data: {{ web }}</h2>
  <h2>{{ $translate("hindi.hello") }}</h2>
  <h2>{{ $translate("hindi.student") }}</h2>
</template>
<style></style>
