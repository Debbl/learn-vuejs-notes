<template>
  <div class="home">
    <h2>home - counter - {{ $store.state.counter }}</h2>
    <h2>options - computed - {{ storeCounter }}</h2>
    <h2>setup - counter - {{ counter }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    storeCounter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<script setup>
import { toRefs } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { counter } = toRefs(store.state);

console.log(store.state.counter);
</script>
