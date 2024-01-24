<script setup>
import { ref } from "vue";
import gsap from "gsap";
const show = ref(true);

// JavaScript Hooks
function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1,
  });
}

function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: "elastic.inOut(2.5, 1)",
    onComplete: done,
  });
}

function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: "elastic.inOut(2.5, 1)",
  });
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done,
  });
}
</script>

<template>
  <!-- Transition Class -->
  <!-- <button @click="show = !show">Click</button>
  <Transition>
    <h1 v-if="show">Hello</h1>
  </Transition> -->

  <!-- Named Transition -->
  <!-- <button @click="show = !show">Click</button>
  <Transition name="fade">
    <h1 v-if="show">Hello</h1>
  </Transition> -->

  <!-- CSS Transitions -->
  <!-- <button @click="show = !show">Click</button>
  <Transition name="slide-fade">
    <h1 v-if="show">Hello</h1>
  </Transition> -->

  <!-- CSS Animation -->
  <!-- <button @click="show = !show">Click</button>
  <Transition name="bounce">
    <h1 v-if="show">Hello here is some bouncy text!</h1>
  </Transition> -->

  <!-- Custom Transition Classes -->
  <!-- <button @click="show = !show">Click</button>
  <Transition
    name="custom-classes"
    enter-active-class="animate__animated animate_tada"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <h1 v-if="show">Hello</h1>
  </Transition> -->

  <!-- JavaScript Hooks -->
  <!-- :css= false This explicitly tells Vue to skip auto CSS transition detection.  -->
  <button @click="show = !show">Click</button>
  <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    :css="false"
    appear
  >
    <div class="gsap-box" v-if="show"></div>
  </Transition>
</template>

<style>
/* Transition Class */
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */

/* Named Transition Class */
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

/* CSS Transitions */
/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */

/* CSS Animation */
/* .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
} */

/* Custom Transition Classes */
/* @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"; */

/* JavaScript Hooks */
.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
