<template>
  <div class="counter">
    <h2>{{ modelValue }}</h2>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:model-value'],
  methods: {
    increment() {
      this.$emit('update:model-value', 99);
    },
  },
};
</script>

<style scoped></style>
