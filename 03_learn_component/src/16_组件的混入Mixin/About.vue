<template>
  <div class="about">
    <h2>About</h2>
    <h2>About - {{ message }}</h2>
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
