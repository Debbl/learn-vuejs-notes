<template>
  <div class="app">
    <h2>App</h2>
    <show-info />
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import ShowInfo from './ShowInfo.vue';
  export default {
    components: {
      ShowInfo,
    },
    setup() {
      const name = ref("debll");
      const age = ref(18);
      provide("name", name);
      provide("age", age)
    }
  }
</script>