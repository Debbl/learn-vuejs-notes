<script setup>
import { ref } from "vue";
const vFocus = {
  created() {
    console.log("created----");
  },
  beforeMount() {
    console.log("before mount -----");
  },
  mounted(el) {
    console.log(el, "----");
    el.focus();
  },
  beforeUpdate() {
    console.log("before update -----");
  },
  updated() {
    console.log("updated ----");
  },
  beforeUnmount() {
    console.log("before unmount");
  },
  unmounted() {
    console.log("unmounted -----");
  },
};
const counter = ref(0);
const isShow = ref(true);
</script>

<template>
  <div class="app">
    <h2>01_自定义指令</h2>
    <h2>当前计数 {{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
    <button @click="isShow = false">hidden</button>
    <input v-if="isShow" type="text" ref="inputRef" v-focus />
  </div>
</template>
