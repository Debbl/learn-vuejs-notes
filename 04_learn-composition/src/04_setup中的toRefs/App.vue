<template>
  <div>
    <h2>info - {{ info }}</h2>
    <h2>info - {{ name }} - {{ age }}</h2>
    <button @click="name = 'foo'">btn</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  setup() {
    const info = reactive({
      name: 'debbl',
      age: 18,
    });

    // const { name, age } = toRefs(info);
    const name = toRef(info, 'name');
    const age = toRef(info, 'age');
    return {
      info,
      name,
      age,
    };
  },
};
</script>

<style lang="scss" scoped></style>
