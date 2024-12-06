<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-neutral-900">
    <div
      class="bg-[url('@/assets/background.png')] bg-no-repeat bg-bottom flex flex-col min-h-screen items-center text-center m-0"
    >
      <Header />
      <main class="flex-grow">
        <RouterView />
      </main>
      <Footer />
    </div>
  </div>
</template>
