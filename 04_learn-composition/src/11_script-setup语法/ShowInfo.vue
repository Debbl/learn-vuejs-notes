<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>name - {{ name }}</h2>
    <h2>age - {{ age }}</h2>
    <button @click="btnClick">emit</button>
  </div>
</template>

<script setup>
const { name, age } = defineProps({
  name: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["emitEvent"]);

const btnClick = () => {
  console.log("btnClick");
  emits("emitEvent", "hello");
};
const message = "Hello World!";
console.log(message);
function showInfoFoo() {
  console.log("show info foo");
}

defineExpose({
  showInfoFoo,
});
</script>

<style lang="scss" scoped></style>
