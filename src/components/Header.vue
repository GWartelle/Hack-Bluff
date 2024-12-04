<script setup>
import { RouterLink } from "vue-router";
import logo from "@/assets/Hack&Bluff.svg";
</script>

<template>
  <header class="pt-10 w-full flex justify-center">
    <RouterLink to="/">
      <img :src="logo" alt="Hack and Bluff" width="300px" />
    </RouterLink>
  </header>
</template>
