<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length != 0">
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="key">{{detailInfo.detailImage[0].key}}</div>
    <div class="goods_info_imgs">
      <img
        alt
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
      />
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
      return {
        counter: 0,
        imgLength: 0,
      };
    },
  },
  methods: {
    imgLoad() {
      // 判断所有图片都加载完了，进行一次回调
      if (++this.counter === this.imgLength) {
        this.$emit("imgLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      //获取图片的个数
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>
<style scoped>
.detail-goods-info {
  padding: 0 10px;
}
.desc,
.key {
  font-size: 12px;
}
.key {
  margin-top: 10px;
}
.goods_info_imgs img {
  width: 100%;
}
</style>


