import dayjs from "dayjs";

export default function directiveFtime(app) {
  app.directive("fTime", {
    mounted(el, bindings) {
      const timestamp = Number(el.textContent);
      el.textContent = dayjs(timestamp).format(bindings.value);
    },
  });
}
