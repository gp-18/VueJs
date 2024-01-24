<script setup>
import {
  reactive,
  ref,
  watch,
  onUpdated,
  onBeforeUpdate,
  watchEffect,
} from "vue";
// Watchers - watch()
// Single Ref
const heartRate = ref(85);
watch(heartRate, (newHeartRateValue, oldHeartRateValue) => {
  console.log("New Heart Rate Value", newHeartRateValue);
  console.log("Old Heart Rate Value", oldHeartRateValue);
  if (newHeartRateValue > oldHeartRateValue && newHeartRateValue >= 120) {
    alert("Calm Down... Take Deep Breath... Breath in.. Breath Out...");
  }
});

// Reactive Object
// When directly watching a reactive object, the watcher is automatically in deep mode
// NewValue and OldValue will be same
// const state = reactive({ heartRate: 85 });
// // state.heartRate in watch() will not work instead use getter function
// watch(state, (newHeartRateValue, oldHeartRateValue) => {
//   console.log("New Heart Rate Value", newHeartRateValue.heartRate);
//   console.log("Old Heart Rate Value", oldHeartRateValue.heartRate);
//   if (newHeartRateValue.heartRate >= 120) {
//     alert("Calm Down... Take Deep Breath... Breath in.. Breath Out...");
//   }
// });

// Getter Function that returns a Value
// const state = reactive({ heartRate: 85 });
// watch(
//   () => state.heartRate,
//   (newHeartRateValue, oldHeartRateValue) => {
//     console.log("New Heart Rate Value", newHeartRateValue);
//     console.log("Old Heart Rate Value", oldHeartRateValue);
//     if (newHeartRateValue > oldHeartRateValue && newHeartRateValue >= 120) {
//       alert("Calm Down... Take Deep Breath... Breath in.. Breath Out...");
//     }
//   }
// );

// const state = reactive({ heartRate: 85 });
// watch(
//   () => {
//     return { ...state };
//   },
//   (newHeartRateValue, oldHeartRateValue) => {
//     console.log("New Heart Rate Value", newHeartRateValue.heartRate);
//     console.log("Old Heart Rate Value", oldHeartRateValue.heartRate);
//     if (
//       newHeartRateValue.heartRate > oldHeartRateValue.heartRate &&
//       newHeartRateValue.heartRate >= 120
//     ) {
//       alert("Calm Down... Take Deep Breath... Breath in.. Breath Out...");
//     }
//   }
// );

// Multiple Data Source - An Array
// const heartRate = ref(85);
// const fear = ref(10);
// watch([heartRate, fear], (newValue, oldValue) => {
//   console.log("New Value", newValue);
//   console.log("Old Value", oldValue);
//   console.log("New Heart Rate Value", newValue[0]);
//   console.log("Old Heart Rate Value", oldValue[0]);
//   console.log("New Fear Rate Value", newValue[1]);
//   console.log("Old Fear Rate Value", oldValue[1]);
//   if (newValue[0] > oldValue[0] && newValue[0] >= 120) {
//     alert("Calm Down... Take Deep Breath... Breath in.. Breath Out...");
//   }
// });

// function increaseHeartFear() {
//   heartRate.value += 5;
//   fear.value += 10;
// }

// function decreaseHeartFear() {
//   heartRate.value -= 5;
//   fear.value -= 10;
// }

// Immediate
// const count = ref(0);
// watch(
//   count,
//   async (newValue, oldValue) => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//       const data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.log("Error! Could not reach the API. " + error);
//     }
//   },
//   {
//     immediate: true,
//   }
// );

// Deep
// When using a getter source watching a reactive object, it is required to manully enable deep mode
// const state = reactive({
//   heartRate: 85,
//   fear: 10,
//   patient: { bedCharge: 500 },
// });
// watch(
//   () => state,
//   (newValue, oldValue) => {
//     console.log("New Value", newValue);
//     console.log("Old Value", oldValue);
//   },
//   {
//     deep: true,
//   }
// );

// When directly watching a reactive object, the watcher is automatically in deep mode
// const state = reactive({
//   heartRate: 85,
//   fear: 10,
//   patient: { bedCharge: 500 },
// });
// watch(state, (newValue, oldValue) => {
//   console.log("New Value", newValue);
//   console.log("Old Value", oldValue);
// });

// Flush
// onBeforeUpdate(() => {
//   console.log("OnBeforeUpdate Called");
// });
// onUpdated(() => {
//   console.log("OnUpdated Called");
// });
// const heartRate = ref(85);
// watch(
//   heartRate,
//   (newHeartRateValue, oldHeartRateValue) => {
//     console.log("Watcher Callback Called");
//   },
//   {
//     flush: "post",
//   }
// );

// Watchers - watchEffect()
// const count = ref(0);
// watchEffect(() => console.log("Count: ", count.value));
// watchEffect(() => console.log("Count: ", count.value), { flush: "post" });

// const url = ref("https://jsonplaceholder.typicode.com/posts/1");
// watchEffect(async () => {
//   try {
//     const res = await fetch(url.value);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error! Could not reach the API. " + error);
//   }
// });

// function changeUrl() {
//   url.value = "https://dummyjson.com/products/1";
// }

// Stop Watcher - when the watcher is no longer needed
// const count = ref(0);
// const unwatch = watchEffect(() => console.log("Count: ", count.value));

// function stopWatch() {
//   unwatch();
// }
</script>

<template>
  <!-- Watchers - watch() -->
  <!-- Single Ref -->
  <h1>Heart Rate Tracking System</h1>
  <h2 v-if="heartRate > 0">Heart Beats per Minute: {{ heartRate }}</h2>
  <h2 v-if="heartRate <= 0">Sorry You are Dead....</h2>
  <button @click="heartRate += 5">Increase</button>
  <button @click="heartRate -= 5">Decrease</button>

  <!-- Reactive Object -->
  <!-- <h1>Heart Rate Tracking System</h1>
  <h2 v-if="state.heartRate > 0">
    Heart Beats per Minute: {{ state.heartRate }}
  </h2>
  <h2 v-if="state.heartRate <= 0">Sorry You are Dead....</h2>
  <button @click="state.heartRate += 5">Increase</button>
  <button @click="state.heartRate -= 5">Decrease</button> -->

  <!-- Getter Function that returns a Value -->
  <!-- <h1>Heart Rate Tracking System</h1>
  <h2 v-if="state.heartRate > 0">
    Heart Beats per Minute: {{ state.heartRate }}
  </h2>
  <h2 v-if="state.heartRate <= 0">Sorry You are Dead....</h2>
  <button @click="state.heartRate += 5">Increase</button>
  <button @click="state.heartRate -= 5">Decrease</button> -->

  <!-- Multiple Data Source  - An Array  -->
  <!-- <h1>Heart Rate Tracking System</h1>
  <h2 v-if="heartRate > 0">
    Heart Beats per Minute: {{ heartRate }} Fear: {{ fear }}
  </h2>
  <h2 v-if="heartRate <= 0">Sorry You are Dead....</h2>
  <button @click="increaseHeartFear">Increase</button>
  <button @click="decreaseHeartFear">Decrease</button> -->

  <!-- Immediate  -->
  <!-- <h1>Count: {{ count }}</h1>
  <button @click="count++">Change Data</button> -->

  <!-- Deep -->
  <!-- <h1>Hospital Charge: {{ state.patient.bedCharge }}</h1>
  <button @click="state.patient.bedCharge += 500">Change Room</button> -->

  <!-- Flush -->
  <!-- <h1>Heart Rate Tracking System</h1>
  <h2 v-if="heartRate > 0">Heart Beats Per Minute: {{ heartRate }}</h2>
  <h2 v-if="heartRate <= 0">Sorry You are Dead... :(</h2>
  <button @click="heartRate += 5">Increase</button>
  <button @click="heartRate -= 5">Decrease</button> -->

  <!-- watchEffect() -->
  <!-- <h1>Count: {{ count }}</h1>
  <button @click="count++">Change Data</button> -->
  <!-- <button @click="changeUrl">Change URL</button> -->

  <!-- Stop Watcher -->
  <!-- <h1>Count: {{ count }}</h1>
  <button @click="count++">Change Data</button>
  <button @click="stopWatch">Stop Watcher</button> -->
</template>

<style></style>
