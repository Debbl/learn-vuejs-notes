<template>
  <div class="app">
    <h2>App</h2>
    <h2>App info - {{ info.name }} - {{ info.age }} - {{ info.height }}</h2>
    <hr />
    <show-info
      :info="info"
      @changeInfoEvent="changeInfo"
      :readonly-info="readonlyInfo"
    />
  </div>
</template>

<script>
import { isProxy, isReactive, isRef, reactive, readonly } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo,
  },
  setup() {
    const info = reactive({
      name: 'debbl',
      age: 18,
      height: 1.88,
    });

    const changeInfo = (payload) => {
      console.log(isProxy(info));
      console.log('-----------');
      console.log(isReactive(info));
      console.log(isReactive(readonlyInfo));
      console.log(isRef(info));
      info.name = payload;
    };

    const readonlyInfo = readonly(info);

    return {
      info,
      changeInfo,
      readonlyInfo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
