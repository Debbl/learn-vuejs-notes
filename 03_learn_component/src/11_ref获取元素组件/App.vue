<template>
  <div class="app">
    <h2>App</h2>
    <h2 ref="refTitle">message {{ message }}</h2>
    <button @click="changeMessage">change title</button>
    <banner ref="refBanner"></banner>
  </div>
</template>

<script>
import Banner from './Banner.vue';
export default {
  components: {
    Banner,
  },
  data() {
    return {
      message: 'Hello Vue',
    };
  },
  methods: {
    changeMessage() {
      this.message = '你好啊！';
      console.log(this.$refs.refTitle.textContent);
      console.log(this.$refs.refBanner);
      console.log(this.$refs.refBanner.bannerMessage);
      console.log(this.$refs.refBanner.$el);
      console.log('------------');
      console.log(this.$parent);
      console.log(this.$root.message);
    },
  },
};
</script>

<style scoped></style>
