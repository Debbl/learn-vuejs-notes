import { createStore } from "vuex";
import { CHANGE_NAME } from "./mutation_types";

import HomeModule from "./modules/home";
import CounterModule from "./modules/counter";

const store = createStore({
  state: () => ({
    // counter: 99,
    rootCounter: 99,
    name: "debbl",
    age: 18,
    friends: [
      { id: 101, name: "foo01", age: 18 },
      { id: 102, name: "foo02", age: 30 },
      { id: 103, name: "foo03", age: 20 },
    ],
    banners: [],
    recommends: [],
  }),
  getters: {
    doubleAge(state) {
      return state.age * 2;
    },
    totalAge(state) {
      return state.friends.reduce((preV, curV) => preV + curV.age, 0);
    },
    message(state, getters) {
      return `name ${state.name}, age ${state.age}, friends total age ${getters.totalAge}`;
    },
    getFriendByID(state) {
      return (id) => state.friends.find((friend) => friend.id === id);
    },
  },
  mutations: {
    [CHANGE_NAME](state) {
      state.name = "foo";
    },
    incrementAge(state, payload = 1) {
      state.age += payload;
    },
    increment(state) {
      state.counter++;
    },
    changeBanners(state, banners) {
      state.banners = banners;
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends;
    },
  },
  actions: {
    incrementAction(context) {
      // console.log(context.commit);
      // console.log(context.getters);
      console.log("increment action");
      context.commit("increment");
    },
    changeNameAction(context, payload) {
      console.log(payload);
      context.commit("changeName");
    },
    // async fetchHomeMultiDataAction(context) {
    //   // 1. Promise then 嵌套
    //   // fetch("http://123.207.32.32:8000/home/multidata").then((res) => {
    //   //   console.log(res);
    //   //   res.json().then((data) => {
    //   //     console.log(data);
    //   //   });
    //   // });

    //   // 2. return Promise
    //   // fetch("http://123.207.32.32:8000/home/multidata")
    //   //   .then((res) => {
    //   //     return res.json();
    //   //   })
    //   //   .then((data) => {
    //   //     console.log(data);
    //   //   });

    //   // 3. async await
    //   return new Promise(async (resolve, reject) => {
    //     const res = await fetch("http://123.207.32.32:8000/home/multidata");
    //     const data = await res.json();
    //     console.log(data);
    //     resolve("aaa");
    //     context.commit("changeBanners", data.data.banner);
    //     context.commit("changeRecommends", data.data.recommend);
    //   });
    // },
  },
  modules: {
    home: HomeModule,
    counter: CounterModule,
  },
});

export default store;
