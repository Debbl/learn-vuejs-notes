<template>
  <div class="app">
    <h2>App</h2>
    <h2>counter - {{ counter }}</h2>
    <h2>store - counter - {{ $store.state.counter }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <hr />
    <home></home>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Home from "./views/Home.vue";

const counter = ref(0);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};
</script>
