import { createApp } from "vue";

import App from "./01_自定义指令/App.vue";
import useDirectives from "./01_自定义指令/directives";

const app = createApp(App);
// app.directive("ftime", {
//   mounted(el, bindings) {
//     const timestamp = Number(el.textContent);
//     el.textContent = dayjs(timestamp).format(bindings.value);
//   },
// });

app.use(useDirectives);

app.mount("#app");
