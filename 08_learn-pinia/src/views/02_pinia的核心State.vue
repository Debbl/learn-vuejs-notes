<template>
  <div class="home">
    <h2>Home</h2>
    <h2>name - {{ name }}</h2>
    <h2>age - {{ age }}</h2>
    <h2>level - {{ level }}</h2>
    <button @click="changeState">change user</button>
    <button @click="restState">reset user</button>
    <button @click="addLevel">add level</button>
  </div>
</template>

<script setup>
import useUser from "@/stores/user";
import { storeToRefs } from "pinia";

const userStore = useUser();

const { name, age, level } = storeToRefs(userStore);

const changeState = () => {
  // 1. 直接修改
  // userStore.name = "foo";

  // 2. 多个修改
  // userStore.$patch({
  //   name: "foo",
  //   age: 20,
  //   level: 100,
  // });

  // 3. marge 合并
  const oldState = userStore.$state;
  userStore.$state = {
    name: "aaa",
    age: 100,
  };

  console.log(userStore.level);
  console.log(oldState === userStore.$state);
};

const restState = () => {
  userStore.$reset();
};

const addLevel = () => {
  userStore.level++;
};
</script>
