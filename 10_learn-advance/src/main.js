import { createApp } from "vue";

// import App from "./01_自定义指令/App.vue";
import useDirectives from "./01_自定义指令/directives";

// import App from "./02_内置组件补充/App.vue";
// import App from './03_安装插件/App.vue'
import App from "./04_Render函数/App.vue";

import {pluginFun, pluginObject} from "@/03_安装插件/plugin";

const app = createApp(App);
// app.directive("ftime", {
//   mounted(el, bindings) {
//     const timestamp = Number(el.textContent);
//     el.textContent = dayjs(timestamp).format(bindings.value);
//   },
// });

app.use(useDirectives);
app.use(pluginFun)
app.use(pluginObject)

app.mount("#app");
