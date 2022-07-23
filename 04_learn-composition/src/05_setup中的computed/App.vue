<template>
  <div>
    <h2>fullName - {{ fullName }}</h2>
    <button @click="fullName = 'aaa bbb'">btn</button>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  setup() {
    const names = reactive({
      firstName: 'foo',
      lastName: 'bar',
    });

    // const fullName = computed(() => {
    //   return names.firstName + names.lastName;
    // });

    const fullName = computed({
      get: function () {
        return names.firstName + names.lastName;
      },
      set: function (newValue) {
        [names.firstName, names.lastName] = newValue.split(' ');
        console.log(names);
      },
    });
    return {
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
