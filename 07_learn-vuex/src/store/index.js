import { createStore } from "vuex";
import { CHANGE_NAME } from "./mutation_types";

const store = createStore({
  state: () => ({
    counter: 99,
    name: "debbl",
    age: 18,
    friends: [
      { id: 101, name: "foo01", age: 18 },
      { id: 102, name: "foo02", age: 30 },
      { id: 103, name: "foo03", age: 20 },
    ],
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
  },
});

export default store;
