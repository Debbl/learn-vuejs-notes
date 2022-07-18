<template>
  <h2>{{ title }}</h2>
  <div class="content">
    <slot>
      <p>我是默认的内容</p>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      message: 'Hello Vue',
    };
  },
};
</script>

<style scoped></style>
