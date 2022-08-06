<script>
import { h } from "vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  render() {
    return h("div", { className: "counter" }, [
      h("h2", null, `当前计数 ${this.counter}`),
      h("button", { onClick: this.increment }, "+1"),
      h("button", { onClick: this.decrement }, "+1"),
    ]);
  },
};
</script>
