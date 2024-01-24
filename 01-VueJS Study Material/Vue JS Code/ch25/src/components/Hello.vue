<script setup>
// Event Handling - Inline Handlers
import { ref } from "vue";
const count = ref(0);

// Calling Methods
// function say() {
//   console.log("Hello...");
// }
// function say(str) {
//   console.log(str);
// }

// Accessing Event Argument
// function say(e) {
//   console.log("Event", e);
// }

// function say(str, e) {
//   console.log("STR", str);
//   console.log("Event", e);
// }

// Event Handling - Method Handlers
// function say(e) {
//   console.log("Event", e);
// }

// Event Modifiers
// function CheckData() {
//   console.log("Check Data");
// }
// function onSubmit() {
//   console.log("Form Submitted");
// }

// Key Modifiers
// function onPressEnter() {
//   console.log("Enter Key Pressed");
// }

// System Modifiers
// function onPressAltEnter() {
//   console.log("Alt + Enter Key Pressed");
// }
// function onCtrlClick() {
//   console.log("Ctrl + Click Pressed");
// }
// function onPressCtrl() {
//   console.log("Ctrl Key Pressed");
// }

// Exact Modifiers
// function onCtrlClick() {
//   console.log(" Ctrl + Click Pressed");
// }
// function onExactCtrlClick() {
//   console.log(" Exact Ctrl + Click Pressed");
// }
// function onNoSys() {
//   console.log("No system modifiers are pressed");
// }

// Mouse Button Modifier
// function onRightClick() {
//   console.log("Right Click...");
// }

// Multiple Events
// function onMouseDown() {
//   console.log("Mouse Down");
// }
// function onMouseUp() {
//   console.log("Mouse Up");
// }
// function firstEvent() {
//   console.log("First Event");
// }
// function secondEvent() {
//   console.log("Second Event");
// }
</script>

<template>
  <!-- Event Handling - Inline Handlers -->
  <h1>Count: {{ count }}</h1>
  <button v-on:click="count++">Increase</button>
  <!-- <button @click="count++">Increase</button> -->
  <!-- <input v-on:focusin="count++" type="text" /> -->
  <!-- <input v-on:focusout="count--" type="text" /> -->

  <!-- Calling Methods -->
  <!-- <button @click="say()">Click</button> -->
  <!-- <button @click="say('Bye...')">Click</button> -->

  <!-- Accessing Event Argument using $event Special Variable -->
  <!-- <button @click="say($event)">Click</button> -->
  <!-- <button @click="say('Hello...', $event)">Click</button> -->

  <!-- Accessing Event Argument using Inline Arrow Function -->
  <!-- <button @click="(event) => say(event)">Click</button> -->
  <!-- <button @click="(event) => say('Hello...', event)">Click</button> -->

  <!-- Event Handling - Method Handlers -->
  <!-- <button @click="say">Click</button> -->

  <!-- Event Modifiers -->
  <!-- <a @click.prevent="CheckData" href="https://www.google.com">Go to Google</a> -->
  <!-- <form @submit.prevent="onSubmit">
    <button type="submit">Submit</button>
  </form> -->
  <!-- <form @submit.prevent>
    <button type="submit">Submit</button>
  </form> -->

  <!-- Key Modifiers -->
  <!-- <input @keyup.enter="onPressEnter" type="text" /> -->

  <!-- System Modifiers -->
  <!-- <input @keyup.alt.enter="onPressAltEnter" type="text" /> -->
  <!-- <input @click.ctrl="onCtrlClick" type="text" /> -->
  <!-- keyup.ctrl will only trigger if you release a key while holding down ctrl. It won't trigger if you release the ctrl key alone. -->
  <!-- <input @keyup.ctrl="onPressCtrl" type="text" /> -->

  <!-- exact Modifier -->
  <!-- <button @click.ctrl="onCtrlClick">Click</button> -->
  <!-- <button @click.ctrl.exact="onExactCtrlClick">Click</button> -->
  <!-- <button @click.exact="onNoSys">Click</button> -->

  <!-- Mouse Button Modifiers -->
  <!-- <input @click.right="onRightClick" type="text" /> -->

  <!-- Multiple Events -->
  <!-- <button v-on="{ mousedown: onMouseDown, mouseup: onMouseUp }">Click</button> -->
  <!-- <button @click="firstEvent(), secondEvent()">Click</button> -->
</template>

<style></style>
