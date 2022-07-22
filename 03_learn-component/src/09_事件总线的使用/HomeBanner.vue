<template>
  <div class="home-banner">
    <h2>Home Banner</h2>
  </div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  data() {
    return {};
  },
  created() {
    eventBus.on('onEventBus', (args) => {
      console.log('-----------------');
      console.log(args);
      console.log('-----------------');
    });
  },
};
</script>

<style scoped></style>
