<template>
  <div class="app">
    <room-area :area-data="areaData" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import RoomArea from "./components/RoomArea.vue";
// import high_score from "./data/high_score.json";

const areaData = ref({});

// 模拟网络请求
setTimeout(() => {
  import("./data/high_score.json").then((res) => {
    areaData.value = res.default;
  });
}, 1000);

// console.log(areaData);
</script>

<style scoped></style>
