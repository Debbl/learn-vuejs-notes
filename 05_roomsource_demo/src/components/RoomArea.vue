<template>
  <div class="room-area">
    <area-header :title="areaData.title" :subtitle="areaData.subtitle" />
  </div>

  <div class="room-list">
    <template v-for="item in areaData.list" :key="item.id">
      <room-item :item-data="item" />
    </template>
  </div>
</template>

<script setup>
import AreaHeader from "./AreaHeader.vue";
import RoomItem from "./RoomItem.vue";
const props = defineProps({
  areaData: {
    type: Object,
    default: () => ({}),
  },
});

// console.log(props.areaData);
</script>

<style lang="less" scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
}
</style>
