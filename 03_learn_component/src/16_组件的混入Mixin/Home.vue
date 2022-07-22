<template>
  <div class="home">
    <h2>Home</h2>
    <h2>Home - {{ message }}</h2>
  </div>
</template>

<script>
import messageMixin from './mixins/message-mixin';
export default {
  mixins: [messageMixin],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
