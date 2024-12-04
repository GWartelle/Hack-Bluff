<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { FortuneWheel } from "vue3-fortune-wheel";
import type { Data, ImgParams } from "vue3-fortune-wheel";
import logoImage from "@/assets/primary-logo.svg";

const rule = ref(2);
const wheel = ref<InstanceType<typeof FortuneWheel> | null>(null);
const data = ref<Data[]>([
  { id: 1, value: "Say 2 words", bgColor: "#506efa", color: "#fff" },
  {
    id: 2,
    value: "Use two-syllable words",
    bgColor: "#fff",
    color: "var(--color-primary)",
  },
  {
    id: 3,
    value: "Speak in a whisper",
    bgColor: "var(--color-primary)",
    color: "#fff",
  },
  {
    id: 4,
    value: "Use an accent",
    bgColor: "#fff",
    color: "var(--color-primary)",
  },
  {
    id: 5,
    value: "Use only verbs",
    bgColor: "var(--color-primary)",
    color: "#fff",
  },
  {
    id: 6,
    value: "Sing the word",
    bgColor: "#fff",
    color: "var(--color-primary)",
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
</script>

<template>
  <div class="flex justify-center gap-10 mt-10">
    <button
      class="btn btn-lg bg-secondary text-white hover:bg-white hover:text-secondary"
      @click="launchWheel"
    >
      Spin the wheel!
    </button>
    <RouterLink to="/" class="btn btn-lg bg-secondary">
      <img src="@/assets/go-back.svg" alt="Go back arrow" class="w-6 h-6" />
    </RouterLink>
  </div>
  <FortuneWheel
    ref="wheel"
    v-model="rule"
    :middle-circle="hasMiddleCircle"
    :img-params="logo"
    :data="data"
    @done="done"
  />
</template>
