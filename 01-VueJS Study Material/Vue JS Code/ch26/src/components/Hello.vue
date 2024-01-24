<!-- Form -->
<script setup>
import { ref, reactive } from "vue";
const formData = reactive({
  fullname: "",
  email: "",
  password: "",
  message: "",
  houserentallowance: false,
  driving: "no",
  hobbies: [],
  gender: "",
  jobpost: "",
  joblocation: [],
  state: "",
  fees: "",
});
const stateOptions = ref([
  { text: "Andaman & Nicobar Islands", value: "Andaman & Nicobar Islands" },
  { text: "Andhra Pradesh", value: "Andhra Pradesh" },
  { text: "Arunachal Pradesh", value: "Arunachal Pradesh" },
  { text: "Assam", value: "Assam" },
  { text: "Bihar", value: "Bihar" },
  { text: "Chandigarh", value: "Chandigarh" },
  { text: "Chhattisgarh", value: "Chhattisgarh" },
  { text: "Dadra & Nagar Haveli", value: "Dadra & Nagar Haveli" },
  { text: "Daman and Diu", value: "Daman and Diu" },
  { text: "Delhi", value: "Delhi" },
  { text: "Goa", value: "Goa" },
  { text: "Gujarat", value: "Gujarat" },
  { text: "Haryana", value: "Haryana" },
  { text: "Himachal Pradesh", value: "Himachal Pradesh" },
  { text: "Jammu & Kashmir", value: "Jammu & Kashmir" },
  { text: "Jharkhand", value: "Jharkhand" },
  { text: "Karnataka", value: "Karnataka" },
  { text: "Kerala", value: "Kerala" },
  { text: "Lakshadweep", value: "Lakshadweep" },
  { text: "Madhya Pradesh", value: "Madhya Pradesh" },
  { text: "Maharashtra", value: "Maharashtra" },
  { text: "Manipur", value: "Manipur" },
  { text: "Meghalaya", value: "Meghalaya" },
  { text: "Mizoram", value: "Mizoram" },
  { text: "Nagaland", value: "Nagaland" },
  { text: "Odisha", value: "Odisha" },
  { text: "Puducherry", value: "Puducherry" },
  { text: "Punjab", value: "Punjab" },
  { text: "Rajasthan", value: "Rajasthan" },
  { text: "Sikkim", value: "Sikkim" },
  { text: "Tamil Nadu", value: "Tamil Nadu" },
  { text: "Telangana", value: "Telangana" },
  { text: "Tripura", value: "Tripura" },
  { text: "Uttarakhand", value: "Uttarakhand" },
  { text: "Uttar Pradesh", value: "Uttar Pradesh" },
  { text: "West Bengal", value: "West Bengal" },
]);
function handleFormSubmit() {
  console.log("Form Submitted", formData);
}
</script>

<template>
  <pre>{{ formData }}</pre>
  <form @submit.prevent="handleFormSubmit">
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" v-model.trim="formData.fullname" />
    </div>
    <div>
      <label for="email">Email: </label>
      <input type="email" id="email" v-model="formData.email" />
    </div>
    <div>
      <label for="password">Password: </label>
      <input type="password" id="password" v-model="formData.password" />
    </div>
    <div>
      <label for="message">Message: </label>
      <textarea id="message" v-model="formData.message"></textarea>
    </div>
    <div>
      <label for="houserentallowance">House Rent Allowance: </label>
      <input
        type="checkbox"
        id="houserentallowance"
        v-model="formData.houserentallowance"
      />
    </div>
    <div>
      <label for="driving">Driving: </label>
      <input
        type="checkbox"
        id="driving"
        v-model="formData.driving"
        true-value="yes"
        false-value="no"
      />
    </div>
    <div>
      <span>Hobbies:</span>
      <label for="cooking">Cooking</label>
      <input
        type="checkbox"
        id="cooking"
        v-model="formData.hobbies"
        value="cooking"
      />
      <label for="reading">Reading </label>
      <input
        type="checkbox"
        id="reading"
        v-model="formData.hobbies"
        value="reading"
      />

      <label for="gaming">Gaming </label>
      <input
        type="checkbox"
        id="gaming"
        v-model="formData.hobbies"
        value="gaming"
      />
    </div>
    <div>
      <span>Gender: </span>
      <label for="male">Male </label>
      <input type="radio" id="male" v-model="formData.gender" value="male" />
      <label for="female">Female </label>
      <input
        type="radio"
        id="female"
        v-model="formData.gender"
        value="female"
      />
    </div>
    <div>
      <span>Job Post:</span>
      <select v-model="formData.jobpost">
        <option disabled value="">Please Select One</option>
        <option>Vue JS Developer</option>
        <option>React JS Developer</option>
        <option>Angular Developer</option>
      </select>
    </div>
    <div>
      <span>Job Location:</span>
      <select v-model="formData.joblocation" multiple>
        <option>New Delhi</option>
        <option>Banglore</option>
        <option>Ranchi</option>
      </select>
    </div>
    <div>
      <span>States: </span>
      <select v-model="formData.state">
        <option v-for="state in stateOptions" :value="state.value">
          {{ state.text }}
        </option>
      </select>
    </div>
    <div>
      <label for="fees">Fees: </label>
      <input type="text" id="fees" v-model.number="formData.fees" />
      <p>{{ typeof formData.fees }}</p>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<style></style>
