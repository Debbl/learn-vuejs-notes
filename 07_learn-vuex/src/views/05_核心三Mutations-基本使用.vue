<template>
  <div class="home">
    <h2>home - name - {{ $store.state.name }}</h2>
    <button @click="changeName">change name</button>
    <h2>age - {{ $store.state.age }}</h2>
    <button @click="incrementAge">add age</button>
  </div>
</template>

<script>
import { CHANGE_NAME } from "../store/mutation_types";
export default {
  methods: {
    changeName() {
      console.log("change name");
      this.$store.commit(CHANGE_NAME);
    },
    incrementAge() {
      this.$store.commit("incrementAge", 3);
    },
  },
};
</script>

<script setup></script>
