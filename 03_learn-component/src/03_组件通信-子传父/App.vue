<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>
    <add-counter @addEvent="addClick" />
    <sub-counter @subEvent="subClick" />
  </div>
</template>

<script>
import AddCounter from './AddCounter.vue';
import SubCounter from './SubCounter.vue';
export default {
  components: {
    AddCounter,
    SubCounter,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addClick(step) {
      console.log('Ok');
      this.counter += step;
    },
    subClick(step) {
      this.counter -= step;
    },
  },
};
</script>

<style scoped></style>
