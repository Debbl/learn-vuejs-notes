<template>
  <div>
    <h2>App</h2>
    <div class="nav">
      <button @click="backBtnClick">{{ "<" }}</button>
      <button @click="forwardBtnClick">{{ ">" }}</button>
      <hr />
      <!-- <router-link to="home">home</router-link> -->
      <!-- to 可以传入一个对象 -->
      <router-link :to="{ path: '/home' }" active-class="foo-active"
        >home</router-link
      >
      {{ "  " }}
      <router-link to="/about">about</router-link>
      {{ "  " }}
      <router-link to="/user/123">user123</router-link>
      <router-link to="/user/321">user321</router-link>
    </div>
    <div class="nav">
      <router-link to="/home" replace>home</router-link>
      {{ "  " }}
      <router-link to="/about" replace>about</router-link>
    </div>

    <button @click="btnClick">跳转到首页</button>
    <button @click="aboutBtnClick">跳转到关于</button>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnClick = () => {
  console.log("click");
  // router.push("/home");
  router.push({
    path: "/home",
  });
};

const aboutBtnClick = () => {
  console.log("about click");
  router.push({
    path: "/about",
    query: {
      name: "debbl",
      age: 18,
    },
  });
};

const backBtnClick = () => {
  // router.back();
  router.go(-1);
};

const forwardBtnClick = () => {
  router.forward();
};
</script>

<style scoped>
.router-link-active {
  color: red;
  font-size: 18px;
}
.foo-active {
  color: green;
}
</style>
