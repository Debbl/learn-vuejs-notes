import { watch, ref } from "vue";

export default function useTitle(title = "默认值") {
  const titleRef = ref(title);
  watch(
    titleRef,
    (newValue) => {
      document.title = newValue;
    },
    {
      immediate: true,
    }
  );

  return {
    title: titleRef,
  };
}
