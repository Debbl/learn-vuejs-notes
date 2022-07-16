import { createApp } from 'vue';
// import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';

// import './dir1/dir2/dir3/index';

const App2 = {
  template: `
    <h2>template Hello</h2>
    <App />
  `,
  components: {
    App,
  },
};

createApp(App).mount('#app');
