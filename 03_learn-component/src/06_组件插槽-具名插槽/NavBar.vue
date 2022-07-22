<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="content">
      <slot name="content">content</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>

  <div class="other">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue',
    };
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  width: 300px;
  text-align: center;
}
.left {
  width: 80px;
  background-color: skyblue;
}
.content {
  flex: 1;
  background-color: #eee;
}
.right {
  width: 80px;
  background-color: #ccc;
}
</style>
