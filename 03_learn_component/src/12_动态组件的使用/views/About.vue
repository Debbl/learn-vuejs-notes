<template>
  <div class="about">
    <h2>About</h2>
    <h2>name - {{ name }}, age - {{ age }}</h2>
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
  data() {
    return {
      message: 'Hello Vue',
    };
  },
};
</script>

<style scoped></style>
