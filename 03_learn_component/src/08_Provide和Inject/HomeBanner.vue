<template>
  <div class="home-banner">
    <h2>Home Banner</h2>
    <h2>name - {{ name }}</h2>
    <h2>age - {{ age }}</h2>
    <h2>message - {{ message }}</h2>
    <h2>messageValue - {{ typeof messageValue }}</h2>
    <h2>messageValue - {{ messageValue.value }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  inject: ['name', 'age', 'message', 'messageValue'],
};
</script>

<style scoped></style>
