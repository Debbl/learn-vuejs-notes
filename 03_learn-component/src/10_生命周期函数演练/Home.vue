<template>
  <h2>Home</h2>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue',
    };
  },
  beforeCreate() {
    console.log('Home beforeCreate');
  },
  created() {
    console.log('Home created');
  },
  beforeMount() {
    console.log('Home beforeMount');
  },
  mounted() {
    console.log('Home mounted');
  },
  beforeUpdate() {
    console.log('Home beforeUpdate');
  },
  updated() {
    console.log('Home updated');
  },
  beforeUnmount() {
    console.log('Home beforeUnmount');
  },
  unmounted() {
    console.log('Home unmounted');
  },
};
</script>

<style scoped></style>
