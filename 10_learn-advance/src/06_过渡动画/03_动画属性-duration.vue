<script setup>
import { ref } from "vue";

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
    <transition
      name="show"
      type="transition"
      @after-enter="afterEnter"
      :duration="1000"
    >
      <div class="show-img" v-show="isShow">
        <img src="https://avatars.githubusercontent.com/u/61053131" alt="" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.show-img img {
  display: block;
  margin: 0 auto;
}

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
  transition: opacity 10s ease;
}

.show-leave-active {
  animation: bounce-an 1s ease reverse;
  transition: opacity 10s ease;
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
