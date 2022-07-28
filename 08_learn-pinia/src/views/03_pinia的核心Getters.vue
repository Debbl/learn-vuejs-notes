<template>
  <div class="home">
    <h2>Home</h2>
    <h2>doubleCount - {{ counterStore.doubleCount }}</h2>
    <h2>doubleCountAddOne - {{ counterStore.doubleCountAddOne }}</h2>
    <h2>get friend by id - {{ counterStore.getFriendByID(101) }}</h2>
    <h2>get friend by id - {{ counterStore.getFriendByID(102) }}</h2>
    <h2>show message - {{ counterStore.showMessage }}</h2>
  </div>
</template>

<script setup>
import useCounter from "@/stores/counter";

const counterStore = useCounter();
</script>
