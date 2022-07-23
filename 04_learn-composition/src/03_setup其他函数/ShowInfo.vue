<template>
  <div>
    <h2>info - {{ info.name }} - {{ info.age }} - {{ info.height }}</h2>
    <!-- <button @click="info.name = 'foo'">change info</button> -->
    <button @click="changeInfo">change info</button>
    <hr />
    <h2>readonlyInfo - {{ readonlyInfo }}</h2>
    <button @click="readonlyInfo.name = 'bar'">change readonlyInfo</button>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
    readonlyInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  emit: ['changeInfoEvent'],
  setup(props, { emit }) {
    const changeInfo = () => {
      emit('changeInfoEvent', 'foo111');
    };

    return {
      changeInfo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
