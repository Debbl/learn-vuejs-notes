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

      <component
        name="debbl"
        :age="18"
        :is="tabs[currentIndex]"
        @homeEvent="homeClick"
      />
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';
import Category from './views/Category.vue';
export default {
  components: {
    Home,
    About,
    Category,
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
