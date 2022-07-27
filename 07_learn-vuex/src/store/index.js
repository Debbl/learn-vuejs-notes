import { createStore } from "vuex";

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
});

export default store;
