<script setup>
import { ref } from "vue";
const rupeeMoney = ref();
</script>

<template>
  <h1>Indian Rupee to Dollar Converter</h1>
  <div>
    <label for="rupeeMoney">INR: </label>
    <input type="text" id="rupeeMoney" v-model="rupeeMoney" />
  </div>
  <div>
    <p>
      Dollar: <span v-if="rupeeMoney">{{ rupeeMoney / 81.29 }}</span>
    </p>
  </div>
</template>

<style></style>
