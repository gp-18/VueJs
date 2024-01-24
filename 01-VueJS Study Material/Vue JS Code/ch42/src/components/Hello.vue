<script setup>
import { ref } from "vue";
import Dollar from "./Dollar.vue";
import IndianRupee from "./IndianRupee.vue";
import PakistaniRupee from "./PakistaniRupee.vue";
const currentTab = ref("IndianRupee");
const tabs = {
  IndianRupee: IndianRupee,
  Dollar: Dollar,
  PakistaniRupee: PakistaniRupee,
};
</script>

<template>
  <!-- KeepAlive -->
  <button @click="currentTab = 'IndianRupee'">INR to Dollar</button>
  <button @click="currentTab = 'Dollar'">Dollar to INR</button>
  <button @click="currentTab = 'PakistaniRupee'">PKR to INR</button>
  <KeepAlive>
    <component :is="tabs[currentTab]" />
  </KeepAlive>

  <!-- KeepAlive include -->
  <!-- <button @click="currentTab = 'IndianRupee'">INR to Dollar</button>
  <button @click="currentTab = 'Dollar'">Dollar to INR</button>
  <button @click="currentTab = 'PakistaniRupee'">PKR to INR</button>
  <KeepAlive include="Dollar">
    <component :is="tabs[currentTab]" />
  </KeepAlive> -->

  <!-- KeepAlive exclude -->
  <!-- <button @click="currentTab = 'IndianRupee'">INR to Dollar</button>
  <button @click="currentTab = 'Dollar'">Dollar to INR</button>
  <button @click="currentTab = 'PakistaniRupee'">PKR to INR</button>
  <KeepAlive exclude="Dollar">
    <component :is="tabs[currentTab]" />
  </KeepAlive> -->

  <!-- KeepAlive include/exclude - Array -->
  <!-- <button @click="currentTab = 'IndianRupee'">INR to Dollar</button>
  <button @click="currentTab = 'Dollar'">Dollar to INR</button>
  <button @click="currentTab = 'PakistaniRupee'">PKR to INR</button>
  <KeepAlive :include="['Dollar', 'PakistaniRupee']">
    <component :is="tabs[currentTab]" />
  </KeepAlive> -->
</template>

<style></style>
