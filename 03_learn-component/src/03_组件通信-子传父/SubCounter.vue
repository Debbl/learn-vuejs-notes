<template>
  <div class="add">
    <button @click="subClick(1)">-1</button>
    <button @click="subClick(2)">-2</button>
    <button @click="subClick(5)">-5</button>
  </div>
</template>

<script>
export default {
  emits: ['subEvent'],
  methods: {
    subClick(step) {
      console.log(step);
      this.$emit('subEvent', step);
    },
  },
};
</script>

<style scoped></style>
