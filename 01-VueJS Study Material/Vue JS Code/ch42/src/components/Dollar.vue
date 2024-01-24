<script setup>
import { ref, onActivated, onDeactivated } from "vue";
const dollarMoney = ref();
// Lifecyle of Cached Instance
onActivated(() => {
  console.log("Dollar Activated");
});

onDeactivated(() => {
  console.log("Dollar Deactivated");
});
</script>

<template>
  <h1>Dollar to Indian Rupee Converter</h1>
  <div>
    <label for="dollarMoney">Dollar: </label>
    <input type="text" id="dollarMoney" v-model="dollarMoney" />
  </div>
  <div>
    <p>
      INR: <span v-if="dollarMoney">{{ dollarMoney * 81.29 }}</span>
    </p>
  </div>
</template>

<style></style>
