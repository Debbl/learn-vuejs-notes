<template>
  <div class="app">
    <h2>App</h2>
    <h2>counter-{{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="isShow = !isShow">show/hidden</button>
    <template v-if="isShow">
      <show-info />
    </template>
    <show-info v-if="isShow" />
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'
import ShowInfo from './ShowInfo.vue';

  export default {
    components: {
      ShowInfo,
    },
    setup() {
      const counter = ref(0);
      const isShow = ref(true);
      onBeforeMount(() => {
        console.log("on before mount");
      })
      onMounted(() => {
        console.log("on mounted");
      })
      onBeforeUpdate(() => {
        console.log("on before update");
      })
      onUpdated(() => {
        console.log("on update");
      })
      onBeforeUnmount(() => {
        console.log("on before unmount");
      })
      onUnmounted(() => {
        console.log("on unmounted");
      })

      return {
        counter,
        isShow,
      }
    }
  }
</script>