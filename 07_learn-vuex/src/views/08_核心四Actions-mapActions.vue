<template>
  <div class="home">
    <h2>home - counter - {{ $store.state.counter }}</h2>
    <h2>home - name - {{ $store.state.name }}</h2>
    <button @click="actionBtnClick">action</button>
    <button @click="actionBtnChangeName">change name</button>
    <button @click="fetchDataAction">fetch home data</button>
    <button @click="incrementAction">increment action</button>
    <button @click="addAction">add action</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    actionBtnClick() {
      this.$store.dispatch("incrementAction");
    },
    actionBtnChangeName() {
      // this.$store.dispatch("changeName", "aaa");
      this.$store.dispatch({
        type: "changeNameAction",
      });
    },
    fetchDataAction() {
      this.$store.dispatch("fetchHomeMultiDataAction");
    },
    ...mapActions(["incrementAction", "changeNameAction"]),
  },
};
</script>

<script setup>
import { mapActions, useStore } from "vuex";
const store = useStore();

const { incrementAction: action1 } = mapActions(["incrementAction"]);
const addAction = action1.bind({ $store: store });
</script>
