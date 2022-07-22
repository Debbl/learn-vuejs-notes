<template>
  <div class="app">
    <h2>App</h2>
    <!-- <counter v-model="appCounter" /> -->
    <!-- <counter
      :model-value="appCounter"
      @update:model-value="appCounter = $event"
    ></counter>

    <counter v-model="appCounter"></counter> -->

    <counter2 v-model:counter="appCounter" v-model:name="appName"></counter2>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import Counter2 from './Counter2.vue';
export default {
  components: {
    Counter,
    Counter2,
  },
  data() {
    return {
      appCounter: 990,
      appName: 'App',
    };
  },
  methods: {
    incrementApp(e) {
      console.log(e);
      this.appCounter++;
    },
  },
};
</script>

<style scoped></style>
