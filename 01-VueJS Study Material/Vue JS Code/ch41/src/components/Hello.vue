<script setup>
import Recent from "./Recent.vue";
import Popular from "./Popular.vue";
import Guest from "./Guest.vue";
import { ref } from "vue";
const currentTab = ref("Recent");
const tabs = {
  Recent: Recent,
  Popular: Popular,
  Guest: Guest,
};
</script>

<template>
  <!-- Without Dynamic Component -->
  <!-- <button @click="currentTab = 'Recent'">Recent</button>
  <button @click="currentTab = 'Popular'">Popular</button>
  <button @click="currentTab = 'Guest'">Guest</button>
  <Recent v-if="currentTab === 'Recent'" />
  <Popular v-if="currentTab === 'Popular'" />
  <Guest v-if="currentTab === 'Guest'" /> -->

  <!-- Dynamic Component -->
  <button @click="currentTab = 'Recent'">Recent</button>
  <button @click="currentTab = 'Popular'">Popular</button>
  <button @click="currentTab = 'Guest'">Guest</button>
  <component :is="tabs[currentTab]" />

  <!-- Dynamic Component with v-for -->
  <!-- <button v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
    {{ tab }}
  </button>
  <component :is="tabs[currentTab]" /> -->
</template>

<style></style>
