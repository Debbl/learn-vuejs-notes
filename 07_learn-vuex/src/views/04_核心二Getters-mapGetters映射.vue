<template>
  <div class="home">
    <h2>home - doubleAge - {{ $store.getters.doubleAge }}</h2>
    <h2>home - totalAge - {{ $store.getters.totalAge }}</h2>
    <h2>message - {{ $store.getters.message }}</h2>
    <h2>get friend id - {{ $store.getters.getFriendByID(103) }}</h2>
    <h2>totalAge - {{ totalAge }}</h2>
    <h2>get friend by id - {{ getFriendByID(101) }}</h2>
    <h2>sMessage - {{ sMessage }}</h2>
    <h2>message - {{ message }}</h2>
    <button @click="changeName">change name</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["totalAge", "massage"]),
    ...mapGetters(["getFriendByID"]),
  },
};
</script>

<script setup>
import { toRefs } from "vue";
import { computed } from "@vue/reactivity";
import { mapGetters, useStore } from "vuex";

const store = useStore();
const { message: messageFn } = mapGetters(["message"]);

const sMessage = computed(messageFn.bind({ $store: store }));

// const { message } = toRefs(store.getters);
const message = computed(() => store.getters.message);
// 不是响应式的
// const { message } = store.getters;

const changeName = () => {
  store.state.name = "foo";
};
</script>
