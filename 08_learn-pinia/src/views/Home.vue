<template>
  <div class="home">
    <h2>Home</h2>
    <h2>count - {{ counterStore.count }}</h2>
    <button @click="counterStore.increment">add count</button>
    <button @click="counterStore.incrementNum(10)">add count 10</button>
    <button @click="homeStore.fetchMultiDataHome">fetch data</button>
    <button @click="homeStore.fetchMultiDataHome">fetch data</button>
    <button @click="fetchData">fetch data</button>

    <h2>展示数据</h2>
    <ul>
      <template v-for="item in homeStore.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import useCounter from "@/stores/counter";
import useHome from "@/stores/home";

const counterStore = useCounter();
const homeStore = useHome();

const fetchData = () => {
  homeStore.fetchMultiDataHome().then((res) => {
    console.log(res, "-------");
  });
};

// counterStore.$onAction((onAfter, onError) => {});
</script>
