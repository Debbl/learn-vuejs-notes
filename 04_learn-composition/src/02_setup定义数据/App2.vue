<template>
  <div class="app">
    <h2>App</h2>
    <form action="#">
      <label for="username">
        username: <input type="text" id="username" v-model="account.username" />
      </label>
      <label for="password">
        password:<input
          type="password"
          id="password"
          v-model="account.password"
        />
      </label>
    </form>
    <h2>username - {{ account.username }}</h2>
    <h2>password - {{ account.password }}</h2>
    <show-info name="debbl" :age="18" />
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo,
  },
  setup() {
    const info = ref({});

    const account = reactive({
      username: 'debbl',
      password: '123',
    });
    return {
      account,
    };
  },
};
</script>

<style lang="scss" scoped></style>
