<template>
  <div>
    <hr />
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>height: {{ height }}</h2>
    <h2>{{ friends }}</h2>
    <h2>{{ $attrs.address }}</h2>
  </div>
  <!-- <div :="$attrs"></div> -->
  <!-- <div :="$attrs"></div> -->
</template>

<script>
export default {
  // props: ['name', 'age', 'height'],
  props: {
    name: {
      type: String,
      required: true,
      default: '',
      validator: (value) => {
        console.log(value);
        return true;
      },
    },
    age: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    friends: {
      type: Object,
      default: () => ({
        name: 'baz',
      }),
    },
  },
  data() {
    return {
      // name: 'debbl',
      // age: 18,
      // height: 1.88,
    };
  },
  created() {
    console.log(this.$attrs.address);
  },
};
</script>

<style scoped></style>
