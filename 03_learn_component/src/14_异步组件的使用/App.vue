<template>
  <div class="app">
    <div class="nav">
      <template v-for="(item, index) in tabs">
        <button
          @click="currentIndex = index"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </button>
      </template>
    </div>

    <div class="views">
      <!-- <template v-if="currentIndex === 0">
        <home></home>
      </template>
      <template v-if="currentIndex === 1">
        <about></about>
      </template>
      <template v-if="currentIndex === 2">
        <category></category>
      </template> -->

      <!-- <keep-alive exclude="Home" include="Home"> -->
      <keep-alive include="Home">
        <component
          name="debbl"
          :age="18"
          :is="tabs[currentIndex]"
          @homeEvent="homeClick"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
// import Category from './views/Category.vue';

// const AsyncCategory = defineAsyncComponent(() =>
//   import('./views/Category.vue')
// );

const AsyncCategory = defineAsyncComponent({
  loader: () => import('./views/Category.vue'),
});

export default {
  components: {
    Home,
    About,
    Category: AsyncCategory,
  },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      currentIndex: 0,
    };
  },
  methods: {
    homeClick(arg) {
      console.log('app---', arg);
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
