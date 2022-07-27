<template>
  <div class="home">
    <h2>home - counter - {{ $store.state.counter }}</h2>
    <h2>store - name - {{ $store.state.name }}</h2>
    <h2>store - age - {{ $store.state.age }}</h2>
    <!-- <h2>{{ name + age }}</h2> -->
    <!-- <h2>sName - {{ sName }}</h2>
    <h2>sAge - {{ sAge }}</h2>
    <h2>cName - {{ cName }}</h2>
    <h2>cAge - {{ cAge }}</h2> -->
    <h2>name and age - {{ name }} - {{ age }}</h2>
    <button @click="incrementAge">add age</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["name", "age"]),
    ...mapState({
      sName: (state) => state.name,
      sAge: "age",
    }),
  },
};
</script>

<script setup>
import { computed, toRefs } from "vue";
import { mapState, useStore } from "vuex";
import useState from "../hooks/useState";

const store = useStore();

// const { name, age } = mapState(["name", "age"]);

// console.log(name.call({ $store: store }));

// 1. 直接使用
// const cName = computed(name.bind({ $store: store }));
// const cAge = computed(age.bind({ $store: store }));

// 2. useState
// const { name, age } = useState(["name", "age"]);

// 3. store
const { name, age } = toRefs(store.state);

const incrementAge = () => {
  store.state.age++;
};
</script>
