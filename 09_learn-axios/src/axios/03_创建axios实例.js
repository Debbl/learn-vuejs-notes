axios.get("http://123.207.32.32:9001/lyric?id=500665346").then((res) => {
  console.log(res);
});

const instance1 = axios.create({
  baseURL: "http://123.207.32.32:8000/",
  timeout: 6000,
  headers: {},
});

instance1.get("/home/multidata").then((res) => {
  console.log(res.data);
});

const instance2 = axios.create({
  baseURL: "http://123.207.32.32:9001",
});

instance2
  .get("/lyric", {
    params: {
      id: 500665346,
    },
  })
  .then((res) => {
    console.log("----");
    console.log(res);
  });
