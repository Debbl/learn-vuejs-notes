<template>
  <div class="home">
    <h2>Home</h2>
    <h2>name - {{ name }}</h2>
    <h2>age - {{ age }}</h2>
    <button @click="homeBtnClick">btn</button>
    <h2>counter: {{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    name: {
      type: String,
      default: '',
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  emits: ['homeEvent'],
  data() {
    return {
      message: 'Hello Vue',
      counter: 0,
    };
  },
  methods: {
    homeBtnClick() {
      console.log('HomeBtnClick');
      this.$emit('homeEvent', 'home');
    },
  },
  created() {
    console.log('home created');
  },
  unmounted() {
    console.log('home unmounted');
  },
  activated() {
    console.log('home activated');
  },
  deactivated() {
    console.log('home deactivated');
  },
};
</script>

<style scoped></style>
