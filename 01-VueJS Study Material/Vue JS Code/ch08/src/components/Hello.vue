<!-- Attribute Binding -->
<script setup>
// v-bind
const mydataid = "jack";
const url = "https://therajeshkumar.com";

// Dynamic Binding Multiple Attributes
const objofattrs = {
  id: "jack",
  href: "https://therajeshkumar.com",
};

// Dynamic Argument
const attributeName = "href";

// Boolean Attributes
const isDisabled = true;
</script>

<template>
  <h1>{{ mydataid }}</h1>
  <h1 id="jack">Hello 1</h1>
  <!-- v-bind -->
  <h1 v-bind:id="mydataid">Hello 2</h1>
  <h1 :id="mydataid">Hello 3</h1>
  <a v-bind:href="url">Visit 1</a> <br />
  <a :href="url">Visit 2</a> <br />

  <a :id="mydataid" :href="url">Visit 3</a> <br />

  <!-- Dynamic Binding Multiple Attributes -->
  <a v-bind="objofattrs">Visit 4</a> <br />

  <!-- Dynamic Argument -->
  <a v-bind:[attributeName]="url">Visit 5</a> <br />
  <a :[attributeName]="url">Visit 6</a> <br />

  <!-- Boolean Attribute -->
  <button disabled>Click 1</button>
  <button :disabled="isDisabled">Click 2</button>
</template>

<style></style>
