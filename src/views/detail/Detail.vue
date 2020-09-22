<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
    <detail-goods-info :goods="goods" />
  </div>
</template>

<script>
import DetailNavBar from "./childcomps/DetailNavBar";
import DetailSwiper from "./childcomps/DetailSwiper";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";

import { geDetail, Goods } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
    };
  },
  created() {
    // 因为缓存原因 导致数据没更新
    /* 保存传入的iid */
    this.iid = this.$route.params.iid;

    /* 根据iid请求详情数据 */
    geDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      /* 获取顶部的图片轮播数据 */
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
    });
  },
};
</script>

<style scoped>
</style>
