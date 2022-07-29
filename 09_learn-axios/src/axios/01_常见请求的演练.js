// 1. request
// axios
//   .request({
//     url: "http://123.207.32.32:8000/home/multidata",
//     method: "GET",
//   })
//   .then((res) => {
//     console.log(res.data);
//   });

// 2. get
// axios
//   .get("http://123.207.32.32:9001/lyric?id=500665346", {
//     params: {
//       name: "debbl",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   });
// axios
//   .get("http://123.207.32.32:9001/lyric", {
//     params: {
//       id: "500665346",
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   });

// 3. post
// axios
//   .post(
//     "http://httpbin.org/post",
//     {
//       name: "debbl",
//       age: 18,
//     },
//     {}
//   )
//   .then((res) => {
//     console.log(res);
//   });
axios
  .post(
    "http://123.207.32.32:1888/02_param/postjson",
    {
      data: {
        name: "debbl",
        age: 18,
      },
    },
    {}
  )
  .then((res) => {
    console.log(res);
  });
