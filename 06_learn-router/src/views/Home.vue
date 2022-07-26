<template>
  <div>
    <h2>HOME</h2>
    <div class="nav">
      <router-link to="/home/recommend">recommend</router-link>
      {{ "  " }}
      <router-link to="/home/product">product</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
