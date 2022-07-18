<template>
  <h2>App</h2>
  <show-message title="标题">
    <a href="#">a link</a>
  </show-message>

  <show-message title="标题">
    <img
      src="https://avatars.githubusercontent.com/u/61053131?s=40&v=4"
      alt=""
    />
  </show-message>
  <show-message title="标题"> </show-message>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
export default {
  components: {
    ShowMessage,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
