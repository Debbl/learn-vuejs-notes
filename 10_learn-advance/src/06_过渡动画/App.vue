<script setup>
import { ref } from "vue";
import { shuffle } from "underscore";

const nums = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const addNumber = () => {
  nums.value.splice(randomIndex(), 0, nums.value.length);
};

const randomIndex = () => {
  return Math.floor(Math.random() * nums.value.length);
};

const removeNumber = () => {
  nums.value.splice(randomIndex(), 1);
};

const shuffleNumber = () => {
  nums.value = shuffle(nums.value);
};
</script>

<template>
  <div class="app">
    <h2>06_过渡动画</h2>
    <button @click="addNumber">添加数字</button>
    <button @click="removeNumber">删除数字</button>
    <button @click="shuffleNumber">打乱数组</button>
    <br />
    <transition-group tag="div" name="show">
      <template v-for="item in nums" :key="item">
        <span>{{ item }}</span>
      </template>
    </transition-group>
  </div>
</template>

<style scoped>
span {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #000;
  margin-right: 6px;
}

.show-enter-from,
.show-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.show-enter-to,
.show-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.show-leave-active {
  position: absolute;
}

.show-enter-active,
.show-leave-active {
  transition: all 2s ease;
}

.show-move {
  transition: all 2s ease;
}
</style>
