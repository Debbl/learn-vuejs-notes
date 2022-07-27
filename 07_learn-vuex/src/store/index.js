import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    counter: 99,
    name: "debbl",
    age: 18,
  }),
});

export default store;
