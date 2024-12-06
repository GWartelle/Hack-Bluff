<script setup lang="ts">
import { ref } from "vue";
import { FortuneWheel } from "vue3-fortune-wheel";
import type { Data, ImgParams } from "vue3-fortune-wheel";
import logoImage from "@/assets/primary-logo.svg";

const rule = ref(2);
const wheel = ref<InstanceType<typeof FortuneWheel> | null>(null);
const data = ref<Data[]>([
  {
    id: 1,
    value: "Sing the word",
    bgColor: "var(--color-primary)",
    color: "#fff",
  },
  {
    id: 2,
    value: "Speak fast",
    bgColor: "var(--color-accent)",
    color: "#fff",
  },
  {
    id: 3,
    value: "Whisper the word",
    bgColor: "#fff",
    color: "var(--color-accent)",
  },
  {
    id: 4,
    value: "Speak drunk",
    bgColor: "var(--color-primary)",
    color: "#fff",
  },
  {
    id: 5,
    value: "Use an accent",
    bgColor: "var(--color-accent)",
    color: "#fff",
  },
  {
    id: 6,
    value: "Speak slowly",
    bgColor: "#fff",
    color: "var(--color-accent)",
  },
]);

// Optional: Center image
const logo: ImgParams = {
  src: logoImage,
  width: 100,
  height: 120,
};

const hasMiddleCircle = true;

const done = (result: Data) => {
  console.log("Spin completed:", result);
};

const launchWheel = () => {
  wheel.value?.spin();
};

const randomRule = () => {
  rule.value = Math.floor(Math.random() * data.value.length) + 1;
  launchWheel();
};
</script>

<template>
  <button
    class="btn btn-lg mt-10 text-white hover:text-black"
    @click="randomRule"
  >
    Spin the wheel!
  </button>
  <FortuneWheel
    ref="wheel"
    v-model="rule"
    :middle-circle="hasMiddleCircle"
    :img-params="logo"
    :data="data"
    @done="done"
  />

  <!-- Back home button -->
  <RouterLink to="/" class="btn btn-lg fixed right-5 bottom-10 group">
    <img
      src="@/assets/go-back.svg"
      alt="Go back arrow"
      class="w-6 h-6 transition duration-300 ease-in-out group-hover:invert"
    />
  </RouterLink>
</template>

<style scoped>
.btn {
  background-color: var(--color-primary);
}

.btn:hover {
  background-color: white;
}
</style>
