<script setup>
import {defineAsyncComponent} from "vue";
const AsyncHome = defineAsyncComponent(() => import("./AsyncHome.vue"))
</script>

<template>
  <div class="app">
    <h2>02_内置组件补充</h2>
    <suspense>
      <template #default>
        <async-home />
      </template>
      <template #fallback>
        <h2>Loading...</h2>
      </template>
    </suspense>
    <teleport to="#abc" :disabled="true">
      <h2>teleport abc</h2>
    </teleport>
  </div>
</template>
