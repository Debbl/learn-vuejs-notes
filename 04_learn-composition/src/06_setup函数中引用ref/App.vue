<template>
  <div class="app">
     <h2 ref="title">我是标题</h2>
     <h2 ref="titleRef">我也是标题</h2>
     <button @click="btnClick">按钮</button>
    <show-info ref="showInfoRef" />
  </div>
</template>


<script>
import { onMounted, ref } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo,
  },
  mounted() {
    console.log(this.$refs.title);
  },
  setup() {
    const titleRef = ref();

    const showInfoRef = ref();
    const btnClick = () => {
      console.log(titleRef);
      console.log(titleRef.value.textContent);
      showInfoRef.value.showInfoFoo();
    }

    onMounted(() => {
      console.log(titleRef.value);
    })

    return {
      titleRef,
      btnClick,
      showInfoRef
    }
  }
}
</script>