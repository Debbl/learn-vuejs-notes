<template>
  <div>
    <h2>counter - {{ counter }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h2>title - {{ title }}</h2>
    <button @click="title = 'foo'">title click</button>
    <h2>scrollPosition - {{ scrollPosition }}</h2>
    <div class="content"></div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>-----</h2>
  </div>
</template>

<script>
import useCounter from "./hooks/useCounter";
import useTitle from "./hooks/useTitle";
import useScrollPosition from "./hooks/useScrollPosition";

export default {
  setup() {
    const { counter, increment, decrement } = useCounter();
    const { title } = useTitle();
    const scrollPosition = useScrollPosition();
    return {
      counter,
      increment,
      decrement,
      title,
      scrollPosition,
    };
  },
};
</script>

<style scoped>
.content {
  width: 1000px;
  height: 10px;
  background-color: red;
}
</style>
