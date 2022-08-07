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
    <transition name="show">
      <div class="show-img" v-if="isShow">
        <img src="https://avatars.githubusercontent.com/u/61053131" alt="" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.show-img {
  display: block;
  margin: 0 auto;
}

.show-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.show-enter-active {
  transition: all 2s ease;
}
.show-enter-to {
  opacity: 1;
  transform: scale(1);
}

.show-leave-from {
  opacity: 1;
  transform: scale(1.2);
}
.show-leave-active {
  transition: all 2s ease;
}
.show-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>
