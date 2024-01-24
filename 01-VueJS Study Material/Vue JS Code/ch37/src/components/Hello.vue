<script setup>
import { ref } from "vue";
// Custom Directive
const vFontSize = {
  mounted: (el, binding) => {
    console.log("el:", el);
    console.log("binding:", binding);
    el.style.fontSize = "30px";
  },
};

// Passing Value to Custom Directive
// const vFontSize = {
//   mounted: (el, binding) => {
//     console.log("binding:", binding);
//     console.log("binding Value:", binding.value);
//     el.style.fontSize = binding.value + "px";
//   },
// };

// Passing Variable to Custom Directive
// const fontSize = ref(40);
// const vFontSize = {
//   mounted: (el, binding) => {
//     console.log("binding:", binding);
//     console.log("binding Value:", binding.value);
//     el.style.fontSize = binding.value + "px";
//   },
//   updated: (el, binding) => {
//     console.log("Updated Binding:", binding);
//     console.log("Updated Binding Value:", binding.value);
//     el.style.fontSize = binding.value + "px";
//   },
// };

// Passing Argument to Custom Directive
// const vFontSize = {
//   mounted: (el, binding) => {
//     console.log("binding arg:", binding.arg);
//     let size = 12;
//     switch (binding.arg) {
//       case "small":
//         size = 10;
//         break;
//       case "medium":
//         size = 20;
//         break;
//       case "large":
//         size = 30;
//         break;
//       default:
//         size = 12;
//     }
//     el.style.fontSize = size + "px";
//   },
// };

// Passing Modifiers to Custom Directive
// const vFontSize = {
//   mounted: (el, binding) => {
//     console.log("binding modifiers:", binding.modifiers);
//     let size = 12;
//     if (binding.modifiers.small) {
//       size = 10;
//     } else if (binding.modifiers.medium) {
//       size = 20;
//     } else if (binding.modifiers.large) {
//       size = 30;
//     } else {
//       size = 12;
//     }
//     if (binding.modifiers.blue) {
//       el.style.color = "blue";
//     }
//     el.style.fontSize = size + "px";
//   },
// };

// Custom Directive - Function Shorthand
// this will be called for both mounted and updated
// const vFontSize = (el, binding) => {
//   el.style.fontSize = "50px";
// };
</script>

<template>
  <!-- <div>Hello Normal Font</div> -->

  <!-- Custom Directive -->
  <div v-font-size>Hello Custom Directive Font</div>

  <!-- Passing Value to Custom Directive -->
  <!-- <div v-font-size="40">Hello Custom Directive Font</div> -->

  <!-- Passing Variable to Custom Directive -->
  <!-- <div v-font-size="fontSize">Hello Custom Directive Font</div> -->
  <!-- <button @click="fontSize += 10">Increase Font Size</button> -->

  <!-- Passing Argument to Custom Directive -->
  <!-- <div v-font-size:default>Hello Custom Directive Default Font</div>
  <div v-font-size:small>Hello Custom Directive Small Font</div>
  <div v-font-size:medium>Hello Custom Directive Medium Font</div>
  <div v-font-size:large>Hello Custom Directive Large Font</div> -->

  <!-- Passing Modifiers to Custom Directive -->
  <!-- <div v-font-size.default>Hello Custom Directive Default Font</div>
  <div v-font-size.small>Hello Custom Directive Small Font</div>
  <div v-font-size.medium>Hello Custom Directive Medium Font</div>
  <div v-font-size.large>Hello Custom Directive Large Font</div>
  <div v-font-size.blue>Hello Custom Directive Blue Color</div>
  <div v-font-size.large.blue>Hello Custom Directive Large Font Blue Color</div> -->

  <!-- Custom Directive - Function Shorthand -->
  <!-- <div v-font-size>Hello Custom Directive Font Function Shorthand</div> -->

  <!-- Global Custom Directive -->
  <!-- <div v-font-size>Hello Global Custom Directive Font</div> -->
</template>

<style></style>
