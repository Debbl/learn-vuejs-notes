<template>
  <div class="app">
    <h2>App</h2>
    <h2>counter - {{ counter }}</h2>
    <button @click="counter++">+</button>
  </div>
</template>

<script>
import { reactive, ref, watch, watchEffect } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    // 自动收集依赖
    const watchStopHandle = watchEffect(() => {
      console.log("OK", counter.value);
      if (counter.value > 10 ) {
        watchStopHandle();
      }
    })
    return {
      counter,
    }
  }
}
</script>