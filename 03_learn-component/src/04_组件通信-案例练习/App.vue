<template>
  <div class="app">
    <tab-control :titles="titles" @changeIndexEvent="changePageIndex" />
    <div>
      <h2>{{ pageContents[pageIndex] }}</h2>
    </div>
  </div>
</template>

<script>
import TabControl from './TabControl.vue';
export default {
  components: {
    TabControl,
  },
  data() {
    return {
      titles: ['衣服', '鞋子', '裤子'],
      pageContents: ['衣服列表', '鞋子列表', '裤子列表'],
      pageIndex: 0,
    };
  },
  methods: {
    changePageIndex(index) {
      this.pageIndex = index;
    },
  },
};
</script>

<style scoped></style>
