<script setup>
import { ref } from "vue";

const isShow = ref(true);

const switchShow = () => {
  isShow.value = !isShow.value;
};
</script>

<template>
  <div class="app">
    <h2>06_过渡动画</h2>
    <button @click="switchShow">show/hidden</button>
    <transition name="show" appear>
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

.show-enter-active {
  animation: bounce-an 1s ease;
}

.show-leave-active {
  animation: bounce-an 1s ease reverse;
}

@keyframes bounce-an {
  from {
    opacity: 0;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
