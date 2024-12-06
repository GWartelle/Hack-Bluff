<script setup></script>

<template>
  <div class="flex flex-col gap-10 md:gap-16 mt-32">
    <div class="font-semibold italic text-white">
      <p>A single clue can reveal everything...</p>
      <p>...or hide everything</p>
    </div>
    <RouterLink to="/wheel">
      <button class="btn btn-lg text-3xl w-60 h-24 border-none">
        The Wheel
      </button>
    </RouterLink>
    <RouterLink to="/rules">
      <button class="btn btn-lg text-3xl w-60 h-24 border-none">
        The Rules
      </button>
    </RouterLink>
  </div>
</template>

<style scoped>
.btn {
  color: var(--color-secondary);
  background-color: white;
}

.btn:hover {
  color: white;
  background-color: var(--color-secondary);
}
</style>
