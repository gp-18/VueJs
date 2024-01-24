<script setup>
import Hello from "./components/Hello.vue";
import BaseLayout from "./components/BaseLayout.vue";
</script>

<template>
  <!-- In Props we can not pass HTML -->
  <!-- <Hello name="Sonam" />
  <Hello name="Rahul" /> -->

  <!-- Slot -->
  <Hello>
    <h1>Sonam</h1>
    <p>Lorem ipsum dolor sit amet.</p>
  </Hello>
  <Hello><h3>Rahul</h3></Hello>

  <!-- Fallback Content/ Default Content -->
  <!-- <Hello><h1>Sonam</h1></Hello> -->
  <!-- <Hello></Hello> -->

  <!-- Named Slot -->
  <!-- <BaseLayout>
    <template v-slot:header>
      <h1>This is Header</h1>
    </template>
    <template v-slot:main>
      <h1>This is Main</h1>
    </template>
    <template v-slot:footer>
      <h1>This is Footer</h1>
    </template>
  </BaseLayout> -->

  <!-- Named Slot with shorthand -->
  <!-- <BaseLayout>
    <template #header>
      <h1>This is Header</h1>
    </template>
    <template #main>
      <h1>This is Main</h1>
    </template>
    <template #footer>
      <h1>This is Footer</h1>
    </template>
  </BaseLayout> -->

  <!-- Named Slot with #default -->
  <!-- <BaseLayout>
    <template #header>
      <h1>This is Header</h1>
    </template>
    <template #default>
      <h1>This is Main</h1>
    </template>
    <template #footer>
      <h1>This is Footer</h1>
    </template>
  </BaseLayout> -->

  <!-- Named Slot with Implicit Default -->
  <!-- <BaseLayout>
    <template #header>
      <h1>This is Header</h1>
    </template>

    <h1>This is Main</h1>

    <template #footer>
      <h1>This is Footer</h1>
    </template>
  </BaseLayout> -->

  <!-- Scoped Slot - Single Slot Default -->
  <!-- <Hello v-slot="slotProps">
    <h1>Name: {{ slotProps.nm }}</h1>
    <h1>Age: {{ slotProps.age }}</h1>
  </Hello> -->
  <!-- <Hello v-slot="{ nm, age }">
    <h1>Name: {{ nm }}</h1>
    <h1>Age: {{ age }}</h1>
  </Hello> -->

  <!-- Scoped Slot - Named Scoped Slot -->
  <!-- <BaseLayout>
    <template v-slot:header="headerProps">
      <h1>This is Header {{ headerProps.hdr }}</h1>
    </template>
    <template v-slot:main="mainProps">
      <h1>This is Main {{ mainProps.mn }}</h1>
    </template>
    <template v-slot:footer="footerProps">
      <h1>This is Footer {{ footerProps.ftr }}</h1>
    </template>
  </BaseLayout> -->

  <!-- <BaseLayout>
    <template #header="headerProps">
      <h1>This is Header {{ headerProps.hdr }}</h1>
    </template>
    <template #main="mainProps">
      <h1>This is Main {{ mainProps.mn }}</h1>
    </template>
    <template #footer="footerProps">
      <h1>This is Footer {{ footerProps.ftr }}</h1>
    </template>
  </BaseLayout> -->
</template>

<style scoped></style>
