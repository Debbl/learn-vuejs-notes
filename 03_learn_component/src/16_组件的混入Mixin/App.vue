<template>
  <div class="app">
    <h2>App</h2>
    <home></home>
    <about></about>
  </div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';

export default {
  components: {
    Home,
    About,
  },
  data() {
    return {
      message: 'Hello Vue',
    };
  },
};
</script>

<style scoped></style>
