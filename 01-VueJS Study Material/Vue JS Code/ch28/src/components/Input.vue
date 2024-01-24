<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) },
});
console.log(props.modelModifiers);
const emit = defineEmits(["update:modelValue"]);

function emitValue(e) {
  let value = e.target.value;
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit("update:modelValue", value);
}
</script>
<template>
  <input
    type="text"
    :style="{ backgroundColor: 'red', color: 'white' }"
    :value="modelValue"
    @input="emitValue"
  />
  <br />
  <br />
</template>
<style></style>
