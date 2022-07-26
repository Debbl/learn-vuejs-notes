<template>
  <div class="user">
    <h2>User</h2>
    <h2>ID {{ $route.params.id }}</h2>
  </div>
</template>

<script>
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  created() {
    console.log(this.$route.params.id, "options api");
  },
  beforeRouteUpdate() {
    console.log("-----");
  },
  setup() {
    const route = useRoute();
    console.log(route);
    console.log(route.params.id, "composition api");

    onBeforeRouteUpdate((to, from) => {
      console.log(to);
      console.log(to.params.id, "composition api");
    });
  },
};
</script>
