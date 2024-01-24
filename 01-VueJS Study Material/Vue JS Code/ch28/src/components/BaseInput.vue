<script setup>
// const props = defineProps(["modelValue"]);
const props = defineProps({ modelValue: String });
const emit = defineEmits(["update:modelValue"]);

// v-model Arugment
// const props = defineProps({ firstName: String });
// const emit = defineEmits(["update:firstName"]);

// Multiple v-model Binding
// const props = defineProps({ firstName: String, lastName: String });
// const emit = defineEmits(["update:firstName", "update:lastName"]);
</script>
<template>
  <input
    type="text"
    :style="{ backgroundColor: 'red', color: 'white' }"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <!-- v-model Argument -->
  <!-- <input
    type="text"
    :style="{ backgroundColor: 'red', color: 'white' }"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  /> -->

  <!-- Multiple v-model Binding -->
  <!-- <input
    type="text"
    :style="{ backgroundColor: 'red', color: 'white' }"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :style="{ backgroundColor: 'red', color: 'white' }"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  /> -->
  <br />
  <br />
</template>
<style></style>
