<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({ modelValue: String });
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <input
    type="text"
    :style="{ backgroundColor: 'red', color: 'white' }"
    v-model="value"
  />
  <br />
  <br />
</template>
<style></style>
