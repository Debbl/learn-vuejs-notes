<script>
import { h } from "vue";

export default {
  render() {
    return h("h2", { className: "title" }, [
      h("p", null, "p元素"),
      h("span", null, "span元素"),
    ]);
  },
};
</script>
