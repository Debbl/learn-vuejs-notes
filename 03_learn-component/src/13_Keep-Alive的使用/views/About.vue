<template>
  <div class="about">
    <h2>About</h2>
    <h2>name - {{ name }}, age - {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'About',
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
  data() {
    return {
      message: 'Hello Vue',
    };
  },
  unmounted() {
    console.log('about unmounted');
  },
};
</script>

<style scoped></style>
