export default {
  state: () => ({
    banners: [],
    recommends: [],
  }),
  mutations: {
    changeBanners(state, banners) {
      state.banners = banners;
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends;
    },
  },
  actions: {
    fetchHomeMultiDataAction(context) {
      return new Promise(async (resolve, reject) => {
        const res = await fetch("http://123.207.32.32:8000/home/multidata");
        const data = await res.json();
        console.log(data);
        resolve("aaa home");
        context.commit("changeBanners", data.data.banner);
        context.commit("changeRecommends", data.data.recommend);
      });
    },
  },
};
