<script setup></script>

<template>
  <RouterLink to="/" class="btn btn-lg group">
    <span
      class="text-white transition duration-300 ease-in-out group-hover:text-black"
      >Go back</span
    >
    <img
      src="@/assets/go-back.svg"
      alt="Go back arrow"
      class="w-6 h-6 transition duration-300 ease-in-out group-hover:invert"
    />
  </RouterLink>
  <div>Those are the Rules</div>
</template>

<style scoped>
.btn {
  background-color: var(--color-secondary);
}

.btn:hover {
  background-color: white;
}
</style>
