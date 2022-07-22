<template>
  <h2>{{ message }}</h2>
  <button @click="message = '你好'">change Message</button>
  <button @click="isShow = !isShow">toggle Home</button>
  <home v-if="isShow"></home>
</template>

<script>
import Home from './Home.vue';
export default {
  components: {
    Home,
  },
  data() {
    return {
      message: 'Hello Vue',
      isShow: true,
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped></style>
