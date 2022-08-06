<script setup>
const vUnit = {
  mounted(el, bindings) {
    console.log(el);
    console.log(bindings);
    el.textContent = bindings.value + el.textContent;
  },
};
</script>

<template>
  <div class="app">
    <h2>01_自定义指令</h2>
    <h2 v-unit:aaa.bbb="'¥'">111</h2>
    <h2 v-fTime="'YYYY-MM-DD'">1659774408000</h2>
  </div>
</template>
