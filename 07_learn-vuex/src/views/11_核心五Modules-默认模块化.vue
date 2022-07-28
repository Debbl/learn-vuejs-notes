<template>
  <div class="home">
    <h2>home - counter - {{ $store.state.counter }}</h2>
    <h2>home - name - {{ $store.state.name }}</h2>
    <button @click="fetchDataAction">fetch home data</button>
    <h2>counter - count - {{ $store.state.counter.count }}</h2>
    <h2>
      counter - getters - doubleCounter - {{ $store.getters.doubleCounter }}
    </h2>
    <button @click="incrementCount">counter action</button>
    <ul>
      <template v-for="item in $store.state.banners.list" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    fetchDataAction() {
      this.$store.dispatch("fetchHomeMultiDataAction").then((res) => {
        console.log(res, "------");
      });
    },
    incrementCount() {
      this.$store.dispatch("incrementCountAction");
    },
  },
};
</script>

<script setup></script>
