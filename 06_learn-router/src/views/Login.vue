<template>
  <div class="login">
    <h2>登录</h2>
    <h2>{{ message }}</h2>
    <button @click="loginClick">login</button>
    <button @click="logoutClick">logout</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const message = ref(localStorage.getItem("token"));
const loginClick = () => {
  console.log("点击了 login");
  localStorage.setItem("token", "aaa");
  message.value = "登录成功";
  router.push("/order");
};

const logoutClick = () => {
  localStorage.removeItem("token");
  message.value = "退出状态";
};
</script>
