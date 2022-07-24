<template>
  <div class="show-info">
    <h2>Show info</h2>
  </div>
</template>

<script>
  export default {
    setup() {
      function showInfoFoo() {
        console.log("showInfoFoo");
      }
      return {
        showInfoFoo
      }
    }
  }
</script>