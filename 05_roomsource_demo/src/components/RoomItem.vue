<template>
  <div class="room-item">
    <div class="inner-item">
      <div class="cover">
        <img :src="itemData.picture_url" alt="" />
      </div>
      <div class="info">
        <div :style="{ color: titleInfo.color }">{{ titleInfo.text }}</div>
        <div class="name">{{ itemData.name }}</div>
        <div>{{ itemData.price_format + "/晚" }}</div>
        <div :style="bottomInfo.style">{{ bottomInfo.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});

const titleInfo = computed(() => ({
  text: props.itemData.verify_info.messages.join(" "),
  color: props.itemData.verify_info.text_color,
}));
const bottomInfo = computed(() => ({
  content: props.itemData.bottom_info.content,
  style: {
    color: props.itemData.bottom_info.content_color,
    fontSize: props.itemData.bottom_info.font_size + "px",
  },
}));
</script>

<style lang="less" scoped>
.room-item {
  width: 33.3333%;
  // margin: 0 8px 12px;

  .inner-item {
    margin: 0 8px 12px;
    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      .name {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
