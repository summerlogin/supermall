<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length != 0">
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="key">{{detailInfo.detailImage[0].key}}</div>
    <div class="goods_info_imgs">
      <img alt v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" />
    </div>
  </div>
</template>
<script>
export default {
  name: "detailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    data() {
      return {};
    },
  },
};
</script>
<style scoped>
.detail-goods-info {
  padding: 0 10px;
}
.desc,.key{
  font-size: 12px;
}
.key{
  margin-top: 10px;
}
.goods_info_imgs img{
  width: 100%;
}
</style>


