<template>
  <div>
    <h2>name - {{ name }}</h2>
    <h2>age - {{ age }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped></style>
