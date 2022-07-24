<template>
  <div class="show-info">
    <h2>name - {{ name }}</h2>
    <h2>age - {{ age }}</h2>
    <h2>height - {{ height }}</h2>
    <button @click="btnClick">change name</button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  // inject: ['name', "age"],
  setup() {
    const name = inject("name");
    const age = inject("age");
    const height = inject("height", 1.88)

    const btnClick = () => {
      console.log(name);
      name.value = "foo";
      console.log(name);
    }

    return {
      name,
      age,
      height,
      btnClick,
    }
  }
}
</script>