<template>
  <div class="home">
    <h2>home - counter - {{ $store.state.counter }}</h2>
    <h2>home - name - {{ $store.state.name }}</h2>
    <button @click="fetchDataAction">fetch home data</button>
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
  },
};
</script>

<script setup></script>
