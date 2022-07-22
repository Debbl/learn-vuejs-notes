<template>
  <h2>{{ message }}</h2>
  <home></home>
</template>

<script>
import { computed } from 'vue';
import Home from './Home.vue';
export default {
  components: {
    Home,
  },
  data() {
    return {
      message: 'Hello Vue',
    };
  },
  provide() {
    return {
      name: 'debbl',
      age: 18,
      message: this.message,
      messageValue: computed(() => this.message + 'aaa'),
    };
  },
};
</script>

<style scoped></style>
