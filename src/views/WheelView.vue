<script setup lang="ts">
import { ref } from "vue";
import { FortuneWheel } from "vue3-fortune-wheel";
import type { Data, ImgParams } from "vue3-fortune-wheel";

const gift = ref(2);
const wheel = ref<InstanceType<typeof FortuneWheel> | null>(null);
const data = ref<Data[]>([
  { id: 1, value: "Gift 1", bgColor: "#7d7db3", color: "#ffffff" },
  { id: 2, value: "Gift 2", bgColor: "#ffffff", color: "#000000" },
]);

// Optional: Center image
const logo: ImgParams = {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
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
  <button class="btn btn-lg" @click="launchWheel">Spin the wheel!</button>
  <FortuneWheel
    ref="wheel"
    v-model="gift"
    :middle-circle="hasMiddleCircle"
    :img-params="logo"
    :data="data"
    @done="done"
  />
</template>
