<script setup>
import { ref } from "vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

const isShow = ref(true);

const switchShow = () => {
  isShow.value = !isShow.value;
};
const afterEnter = () => {
  console.log("after enter");
};
</script>

<template>
  <div class="app">
    <h2>06_过渡动画</h2>
    <button @click="switchShow">show/hidden</button>
    <br />
    <transition name="show" mode="out-in" appear>
      <component :is="isShow ? Home : About" />
    </transition>
  </div>
</template>

<style scoped>
.show-enter-from,
.show-leave-to {
  opacity: 0;
}

.show-enter-to,
.show-leave-from {
  opacity: 1;
}

.show-enter-active {
  animation: bounce-an 1s ease;
  transition: opacity 1s ease;
}

.show-leave-active {
  animation: bounce-an 1s ease reverse;
  transition: opacity 1s ease;
}

@keyframes bounce-an {
  from {
    transform: scale(0.6);
  }
  to {
    transform: scale(1);
  }
}
</style>
