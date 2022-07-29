import { createApp } from "vue";
import axios from "axios";
import hyRequest from "./services";
import App from "./App.vue";

createApp(App).mount("#app");

console.log("----");

hyRequest
  .request({
    url: "http://123.207.32.32:9001/lyric?id=500665346",
  })
  .then((res) => {
    console.log(res);
  });

hyRequest
  .get({
    url: "http://123.207.32.32:9001/lyric?id=500665346",
  })
  .then((res) => {
    console.log(res.data);
  });

hyRequest
  .get({
    url: "/lyric?id=500665346",
  })
  .then((res) => {
    console.log("===========");
    console.log(res.data);
  });
