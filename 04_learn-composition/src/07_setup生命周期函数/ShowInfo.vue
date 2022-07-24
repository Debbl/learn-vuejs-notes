<template>
  <div class="show-info">
    <h2>Show Info</h2>
  </div>
</template>

<script>
  import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'

  export default {
    setup() {
      onBeforeMount(() => {
        console.log("show info on before mount");
      })
      onMounted(() => {
        console.log("show info on mounted");
      })
      onBeforeUpdate(() => {
        console.log("show info on before update");
      })
      onUpdated(() => {
        console.log("show info on update");
      })
      onBeforeUnmount(() => {
        console.log("show info on before unmount");
      })
      onUnmounted(() => {
        console.log("show info on unmounted");
      })
    }
  }
</script>