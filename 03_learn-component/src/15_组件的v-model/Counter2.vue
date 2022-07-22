<template>
  <div class="counter">
    <h2>{{ counter }}</h2>
    <button @click="increment">+</button>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
  },
  emits: ['update:counter', 'update:name'],
  methods: {
    increment() {
      this.$emit('update:counter', 99);
      this.$emit('update:name', 'debbl', 'foo');
    },
  },
};
</script>

<style scoped></style>
