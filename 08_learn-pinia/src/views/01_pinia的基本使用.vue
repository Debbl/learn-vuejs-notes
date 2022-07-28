<template>
  <div class="home">
    <h2>Home</h2>
    <h2>{{ counterStore.count }}</h2>
    <h2>count - {{ count }}</h2>
    <button @click="incrementCount">+</button>
  </div>
</template>

<script setup>
import useCounter from "@/stores/counter";
import { storeToRefs, mapState } from "pinia";
import { toRefs } from "vue";

const counterStore = useCounter();
// const { count } = toRefs(counterStore);
const { count } = storeToRefs(counterStore);

function incrementCount() {
  counterStore.count++;
}
</script>
