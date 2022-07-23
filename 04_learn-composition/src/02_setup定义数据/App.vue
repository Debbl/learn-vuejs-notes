<template>
  <div class="app">
    <h2>Message: {{ message.value }}</h2>
    <button @click="changeMessage">btn</button>
    <h2>Counter: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <h2>info counter {{ info.counter.value }}</h2>
    <button @click="counter++">counter++</button>
    <!-- 这里就需要解包 .value -->
    <button @click="info.counter.value++">info btn</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    // let message = 'Hello';

    const message = reactive({
      value: 'Hello',
    });

    function changeMessage() {
      console.log(message);
      message.value = '你好';
    }

    // counter
    const counter = ref(0);
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };

    // ref 浅层解包
    const info = {
      counter,
    };

    return {
      message,
      changeMessage,
      counter,
      increment,
      info,
    };
  },
};
</script>

<style lang="scss" scoped></style>
