<script setup>
import { ref } from "vue";

const counter = ref(0);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

const render = () => (
  <div>
    <h2>05_JSX语法</h2>
    <h2>当前计数 {counter.value}</h2>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>+1</button>
  </div>
);
</script>

<template>
  <render />
</template>
