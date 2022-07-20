<template>
  <div class="app">
    <h2>App</h2>
    <home></home>
    <category v-if="isShowCategory"></category>
    <button @click="btnClick">按钮</button>
    <button @click="isShowCategory = !isShowCategory">ShowCategory</button>
  </div>
</template>

<script>
import Home from './Home.vue';
import Category from './Category.vue';
import eventBus from './utils/event-bus';
export default {
  components: {
    Home,
    Category,
  },
  data() {
    return {
      message: 'Hello',
      isShowCategory: true,
    };
  },
  methods: {
    btnClick() {
      eventBus.emit('onEventBus', this.message);
      eventBus.emit('deEventBus');
      console.log('OK');
    },
  },
};
</script>

<style scoped></style>
