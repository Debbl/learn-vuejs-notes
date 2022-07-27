<template>
  <div class="home">
    <h2>home - doubleAge - {{ $store.getters.doubleAge }}</h2>
    <h2>home - totalAge - {{ $store.getters.totalAge }}</h2>
    <h2>message - {{ $store.getters.message }}</h2>
    <h2>get friend id - {{ $store.getters.getFriendByID(103) }}</h2>
  </div>
</template>

<script>
export default {};
</script>

<script setup></script>
