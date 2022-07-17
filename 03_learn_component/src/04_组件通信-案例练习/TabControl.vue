<template>
  <div class="tab-control">
    <span
      v-for="(item, index) of titles"
      :key="item"
      @click="changeIndex(index)"
      :class="{ active: isActiveIndex === index }"
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      required: true,
    },
  },
  emits: ['changeIndexEvent'],
  data() {
    return {
      isActiveIndex: 0,
    };
  },
  methods: {
    changeIndex(index) {
      this.isActiveIndex = index;
      this.$emit('changeIndexEvent', index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  background-color: skyblue;
}
.tab-control span {
  display: inline-block;
  padding: 0 6px;
  border: 1px solid red;
  border-radius: 6px;
  cursor: pointer;
}
.active {
  color: red;
}
</style>
