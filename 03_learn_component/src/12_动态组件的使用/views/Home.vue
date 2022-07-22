<template>
  <div class="home">
    <h2>Home</h2>
    <h2>name - {{ name }}</h2>
    <h2>age - {{ age }}</h2>
    <button @click="homeBtnClick">btn</button>
  </div>
</template>

<script>
export default {
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
    };
  },
  methods: {
    homeBtnClick() {
      console.log('HomeBtnClick');
      this.$emit('homeEvent', 'home');
    },
  },
};
</script>

<style scoped></style>
