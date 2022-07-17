<template>
  <h2>{{ message }}</h2>
  <show-info
    name="foo"
    :age="19"
    :height="1.88"
    address="地址"
    class="active"
  ></show-info>
  <show-info name="bar" :age="18" :height="1.89"></show-info>
  <show-info name="baz"></show-info>
</template>

<script>
import ShowInfo from './ShowInfo.vue';
export default {
  components: {
    ShowInfo,
  },
  data() {
    return {
      message: 'Hello Vue',
    };
  },
};
</script>

<style scoped></style>
