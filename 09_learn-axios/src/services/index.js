import axios from "axios";

class HYRequest {
  constructor(baseURL, timeout = 2000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }
  post(config) {
    return this.request({ ...config, method: "POST" });
  }
}

export default new HYRequest("http://123.207.32.32:9001");
