<template>
  <div>
    <h2>counter: {{ counter }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <show-info
      ref="showInfoRef"
      name="debbl"
      :age="18"
      @emit-event="handleEvent"
    />
    <show-info />
    <show-info />
    <show-info />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ShowInfo from "./ShowInfo.vue";

const counter = ref(0);
const showInfoRef = ref(null);
const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};
const handleEvent = (payload) => {
  console.log(payload);
  console.log(showInfoRef.value.showInfoFoo());
};
</script>

<style lang="scss" scoped></style>
