<template>
  <div class="app">
    <AppHeader />
    <AppContent />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter';

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter,
  },
};
</script>

<style></style>
