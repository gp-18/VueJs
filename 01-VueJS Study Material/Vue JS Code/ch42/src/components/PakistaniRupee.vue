<script setup>
import { ref } from "vue";

const pkrMoney = ref();
</script>

<template>
  <h1>Pakistani Rupee to Indian Rupee Converter</h1>
  <div>
    <label for="pkrMoney">PKR: </label>
    <input type="text" id="pkrMoney" v-model="pkrMoney" />
  </div>
  <div>
    <p>
      INR: <span v-if="pkrMoney">{{ pkrMoney * 0.34 }}</span>
    </p>
  </div>
</template>

<style></style>
