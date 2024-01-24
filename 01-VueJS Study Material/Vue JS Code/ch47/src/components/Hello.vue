<script setup>
import { ref } from "vue";
import {
  getSingleUserData,
  getAllUserData,
  postUserData,
  updateUserData,
  deleteUserData,
} from "../composables/userApi.js";
let url = ref("https://reqres.in/api/users/");
const uid = ref(1);
const name = ref(null);
const job = ref(null);
const er = ref();
const id = ref();
const { userData, error } = getSingleUserData(url, uid);
// const { usersData, errors } = getAllUserData(url);

// Post or Save user Data
// function onPostUserData() {
//   console.log("Post User Data Form Submitted");
//   const { userData, errors } = postUserData(url, name, job);
//   er.value = errors;
// }

// Update User Data
// function onUpdateUserData() {
//   console.log("Update User Data Form Submitted");
//   const { userData, error } = updateUserData(url, id, name, job);
//   console.log(userData);
// }

// Delete User Data
// function onDeleteUserData() {
//   console.log("Delete User Data Form Submitted");
//   const { userData, error } = deleteUserData(url, id);
//   console.log(userData);
// }
</script>

<template>
  <!-- Display Single User Data -->
  <div>
    <label for="uid">User ID:</label>
    <input type="text" v-model="uid" id="uid" />
  </div>
  <div v-if="error">Oops! Error encountered: {{ error }}</div>
  <div v-else-if="userData">
    <h3>Id: {{ userData.id }}</h3>
    <h3>Full Name: {{ userData.first_name }} {{ userData.last_name }}</h3>
    <h3>Email: {{ userData.email }}</h3>
    <img :src="userData.avatar" alt="avtar" />
  </div>
  <div v-else>Loading...</div>

  <!-- Display All User Data -->
  <!-- <div v-if="errors">Oops! Error encountered: {{ errors }}</div>
  <div v-else-if="usersData">
    <div v-for="user in usersData" :key="user.id">
      <h3>Id: {{ user.id }}</h3>
      <h3>Full Name: {{ user.first_name }} {{ user.last_name }}</h3>
      <h3>Email: {{ user.email }}</h3>
      <img :src="user.avatar" alt="avtar" />
      <hr />
    </div>
  </div>
  <div v-else>Loading...</div> -->

  <!-- Post User Data -->
  <!-- <form method="POST" @submit.prevent="onPostUserData">
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="job">Job: </label>
      <input type="text" id="job" v-model="job" />
    </div>
    <button type="submit">Submit</button>
  </form>
  <h3 v-if="er">{{ er.value.message }}</h3> -->

  <!-- Update User Data -->
  <!-- <form method="POST" @submit.prevent="onUpdateUserData">
    <div>
      <label for="id">Id: </label>
      <input type="text" id="id" v-model="id" />
    </div>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="job">Job: </label>
      <input type="text" id="job" v-model="job" />
    </div>
    <button type="submit">Submit</button>
  </form> -->

  <!-- Delete User Data -->
  <!-- <form method="POST" @submit.prevent="onDeleteUserData">
    <div>
      <label for="id">User ID:</label>
      <input type="text" v-model="id" id="id" />
    </div>
    <button type="submit">Delete</button>
  </form> -->
</template>

<style></style>
