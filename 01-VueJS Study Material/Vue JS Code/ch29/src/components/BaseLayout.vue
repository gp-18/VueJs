<script setup></script>
<template>
  <!-- Named Slot -->
  <slot name="header"></slot>
  <slot name="main"></slot>
  <slot name="footer"></slot>

  <!-- Named Slot with #default and Implicit Default -->
  <!-- <slot name="header"></slot>
  <slot></slot>
  <slot name="footer"></slot> -->

  <!-- Scoped Slot - Named Scoped Slot -->
  <!-- <slot name="header" hdr="H"></slot>
  <slot name="main" mn="M"></slot>
  <slot name="footer" ftr="F"></slot> -->
</template>
<style></style>
