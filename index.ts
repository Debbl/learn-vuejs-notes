import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyButton',
  props: ['disabled'],
  render() {
    return h(
      'button',
      {
        disabled: this.disabled,
        onClick() {
          this.$attrs.onCustomClick();
        },
      },
      this.$$slots.default()
    );
  },
});
