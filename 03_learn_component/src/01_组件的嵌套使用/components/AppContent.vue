<template>
  <div class="content">
    <h2>Content</h2>
    <AppContentList />
  </div>
</template>

<script>
import AppContentList from './AppContentList.vue';
export default {
  components: {
    AppContentList,
  },
};
</script>

<style scoped>
.content {
  color: skyblue;
}
</style>
