<template>
  <h2 class="title">Hello</h2>
  <AppHeaderVue />
</template>

<script>
import AppHeaderVue from './components/AppHeader.vue';
export default {
  components: {
    AppHeaderVue,
  },
};
</script>

<style scoped>
.title {
  color: blue;
}
</style>
