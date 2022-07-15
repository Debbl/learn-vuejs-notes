// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';

const App2 = {
  template: `
    <h2>template Hello</h2>
  `,
};

createApp(App2).mount('#app');
