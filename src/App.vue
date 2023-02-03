<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <login v-bind="loginData" />
</template>

<style scoped></style>
