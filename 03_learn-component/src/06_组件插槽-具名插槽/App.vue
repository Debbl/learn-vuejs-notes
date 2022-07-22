<template>
  <div class="app">
    <nav-bar>
      <template v-slot:left>
        <button>按钮</button>
      </template>
      <template v-slot:content>
        <button>按钮2</button>
      </template>
      <template v-slot:right>
        <button>按钮3</button>
      </template>
      <template v-slot:default>
        <a href="#">a link</a>
      </template>
    </nav-bar>

    <nav-bar>
      <template #left>
        <button>按钮</button>
      </template>
      <template #content>
        <button>按钮2</button>
      </template>
      <template #right>
        <button>按钮3</button>
      </template>
      <template #default>
        <a href="#">a link</a>
      </template>
    </nav-bar>

    <nav-bar>
      <template v-slot:content>
        <h2>h2h2h2h2</h2>
      </template>
    </nav-bar>

    <nav-bar>
      <template v-slot:[name]>
        <h2>h2h2h2h2</h2>
      </template>
    </nav-bar>
    <button @click="name = 'left'">left</button>
    <button @click="name = 'content'">content</button>
    <button @click="name = 'right'">right</button>
    <hr />

    <nav-bar>
      <template #left>
        <button>{{ leftText }}</button>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      message: 'Hello Vue',
      name: 'right',
      leftText: 'left-text',
    };
  },
};
</script>

<style scoped></style>
