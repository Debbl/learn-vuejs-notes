<template>
  <div class="app">
    <h2>App</h2>
    <h2>message - {{ message }}</h2>
    <button @click="message = 'foo'">change message</button>
    <h2>info - {{ info }}</h2>
    <button @click="info.name = 'bar'">change info</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
  setup() {
    const message = ref("Hello World");
    const info = reactive({
      name: "debbl",
      age: 18,
    })

    // 监听数据变化
    watch(message, (newValue, oldValue) => {
      console.log(message);
      console.log(newValue, oldValue);
    }, {
      immediate: true,
    })
    watch(info, (value, oldValue) => {
      console.log(value, oldValue);
    })

    watch(() => info, () => {
      console.log("OK");
    }, {
      immediate: true,
      deep: true,
    })
    return {
      message,
      info,
    }
  }
}
</script>