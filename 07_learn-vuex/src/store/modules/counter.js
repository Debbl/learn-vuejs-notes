export default {
  namespaced: true,
  state: () => ({
    count: 1,
  }),
  mutations: {
    incrementCount(state) {
      console.log(state);
      state.count++;
    },
  },
  getters: {
    doubleCounter(state, getters, rootState) {
      return state.count + rootState.rootCounter;
    },
  },
  actions: {
    incrementCountAction(context) {
      console.log("increment action");
      context.commit("incrementCount");
    },
  },
};
