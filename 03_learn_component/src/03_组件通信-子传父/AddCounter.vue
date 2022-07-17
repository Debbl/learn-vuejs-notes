<template>
  <div class="add">
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(2)">+2</button>
    <button @click="btnClick(5)">+5</button>
  </div>
</template>

<script>
export default {
  emits: ['addEvent'],
  methods: {
    btnClick(step) {
      console.log(step);
      this.$emit('addEvent', step);
    },
  },
};
</script>

<style scoped></style>
