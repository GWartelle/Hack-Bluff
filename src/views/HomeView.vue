<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex flex-col gap-20 mt-32">
    <RouterLink to="/wheel">
      <button
        class="btn btn-lg text-3xl w-60 h-24 bg-white text-secondary hover:bg-secondary hover:text-white border-none"
      >
        The Wheel
      </button>
    </RouterLink>
    <RouterLink to="/rules">
      <button
        class="btn btn-lg text-3xl w-60 h-24 bg-white text-secondary hover:bg-secondary hover:text-white border-none"
      >
        The Rules
      </button>
    </RouterLink>
  </div>
</template>
