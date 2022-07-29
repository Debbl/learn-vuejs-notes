axios.interceptors.request.use(
  (config) => {
    console.log(config, "---------");
    // 1. 显示 loading 动画
    // 2. 请求修改
    // 2.1 headers
    // 2.2 认证/登录 token/cookie
    // 2.3 请求参数的转化
    return config;
  },
  (err) => {
    console.log(err);
    return err;
  }
);

axios.interceptors.response.use(
  (value) => {
    // 2. 结束 loading 动画
    return value.data;
  },
  (err) => {
    console.log(err);
    return err;
  }
);

axios.get("http://123.207.32.32:9001/lyric?id=500665346").then((res) => {
  console.log(res);
});
