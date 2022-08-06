import { onMounted, ref } from "vue";

export default function useFocus() {
  const inputRef = ref();
  onMounted(() => {
    inputRef.value?.focus();
  });

  return { inputRef };
}
