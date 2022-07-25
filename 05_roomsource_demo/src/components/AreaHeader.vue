<template>
  <div class="area-header">
    <h2 class="title">{{ title }}</h2>
    <h3 class="subtitle">{{ subtitle }}</h3>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
  subtitle: {
    type: String,
    default: "默认副标题",
  },
});
</script>

<style lang="less" scoped></style>
