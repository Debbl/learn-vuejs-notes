<template>
  <div class="home">
    <h2>home - counter - {{ $store.state.counter }}</h2>
    <h2>home - name - {{ $store.state.name }}</h2>
    <button @click="actionBtnClick">action</button>
    <button @click="actionBtnChangeName">change name</button>
    <button @click="fetchDataAction">fetch home data</button>
  </div>
</template>

<script>
export default {
  methods: {
    actionBtnClick() {
      this.$store.dispatch("incrementAction");
    },
    actionBtnChangeName() {
      // this.$store.dispatch("changeName", "aaa");
      this.$store.dispatch({
        type: "changeName",
      });
    },
    fetchDataAction() {
      this.$store.dispatch("fetchHomeMultiDataAction");
    },
  },
};
</script>

<script setup></script>
