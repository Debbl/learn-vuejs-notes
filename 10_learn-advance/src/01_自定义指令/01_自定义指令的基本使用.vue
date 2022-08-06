// 方式一 options api ref
<!-- <script>
export default {
  mounted() {
    console.log(this.$refs.inputRef);
    this.$refs.inputRef.focus();
  },
};
</script> -->

// 方式二 composition api ref
<!-- <script setup>
// import { ref, onMounted } from "vue";
import useFocus from "./hooks/useFocus";
// const inputRef = ref();
// onMounted(() => {
//   inputRef.value.focus();
// });

const { inputRef } = useFocus();
</script> -->

// 方式三 options api directives
<!-- <script>
export default {
  directives: {
    focus: {
      mounted(el) {
        console.log(el);
        el.focus();
      },
    },
  },
};
</script> -->

// 方式四 composition api
<script setup>
const vFocus = {
  mounted(el) {
    console.log(el, "----");
    el.focus();
  },
};
</script>

<template>
  <div class="app">
    <h2>01_自定义指令</h2>
    <input type="text" ref="inputRef" v-focus />
  </div>
</template>
