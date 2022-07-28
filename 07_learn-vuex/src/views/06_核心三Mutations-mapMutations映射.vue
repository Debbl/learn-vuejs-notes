<template>
  <div class="home">
    <h2>home - name - {{ $store.state.name }}</h2>
    <h2>age - {{ $store.state.age }}</h2>
    <button @click="changeNameFn">change name</button>
    <button @click="incrementAge(1)">add age</button>
  </div>
</template>

<script>
import { CHANGE_NAME } from "../store/mutation_types";
import { mapMutations } from "vuex";
export default {
  methods: {
    // ...mapMutations([CHANGE_NAME, "incrementAge"]),
  },
};
</script>

<script setup>
import { mapMutations, useStore } from "vuex";
import { CHANGE_NAME } from "../store/mutation_types";

const store = useStore();
const { changeName } = mapMutations([CHANGE_NAME]);

const changeNameFn = changeName.bind({ $store: store });
</script>
