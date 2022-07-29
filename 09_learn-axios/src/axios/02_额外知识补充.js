// 1. baseURL

const baseURl = "http://123.207.32.32:8000";

// 公共的基础配置
axios.defaults.baseURL = baseURl;
axios.defaults.timeout = 2000;
axios.defaults.headers = {};

axios.get("/home/multidata").then((res) => {
  console.log(res.data);
});

// 2. axios 发送多个请求

axios
  .all([
    axios.get("/home/multidata"),
    axios.get("http://123.207.32.32:9001/lyric?id=500665346"),
  ])
  .then((res) => {
    console.log(res);
  });
