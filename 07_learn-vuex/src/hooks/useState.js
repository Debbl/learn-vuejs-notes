import { computed } from "vue";
import { mapState, useStore } from "vuex";

export default function useState(mapper) {
  const store = useStore();
  const stateFns = mapState(mapper);
  const state = {};
  Object.keys(stateFns).forEach((fnKey) => {
    state[fnKey] = computed(stateFns[fnKey].bind({ $store: store }));
  });

  return state;
}
