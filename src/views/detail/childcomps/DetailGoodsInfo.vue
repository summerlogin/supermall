<template>
  <div class="detail-goods-info">
    <p>{{goods.title}}</p>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goods: {
      type: Object,
      default : {}
    },
  },
};
</script>
<style scoped>
</style>
