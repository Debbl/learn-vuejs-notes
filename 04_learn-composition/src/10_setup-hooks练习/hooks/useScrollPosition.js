import { reactive } from "vue";

export default function useScrollPosition() {
  const scrollPosition = reactive({
    x: 0,
    y: 0,
  });

  document.addEventListener("scroll", () => {
    [scrollPosition.x, scrollPosition.y] = [window.scrollX, window.scrollY];
  });

  return {
    scrollPosition
  }
}
