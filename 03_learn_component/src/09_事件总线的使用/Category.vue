<template>
  <div class="category">
    <h2>Category</h2>
  </div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  data() {
    return {
      message: 'Hello Vue',
    };
  },
  methods: {
    deEventHandler() {
      console.log('category被监听');
    },
  },
  created() {
    eventBus.on('deEventBus', this.deEventHandler);
  },
  unmounted() {
    console.log('unmounted');
    eventBus.off('deEventBus', this.deEventHandler);
  },
};
</script>

<style scoped></style>
