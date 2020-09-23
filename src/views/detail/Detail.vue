<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="scroll">
      <div>
        <detail-swiper :top-images="topImages" />
        <detail-goods :goods="goods" />
        <detail-shop-info :shop="shop" />
        <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
        <detail-item-params :item-params="itemParams"/>
      </div>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childcomps/DetailNavBar";
import DetailSwiper from "./childcomps/DetailSwiper";
import DetailGoods from "./childcomps/DetailGoods";
import detailShopInfo from "./childcomps/detailShopInfo";
import detailGoodsInfo from "./childcomps/detailGoodsInfo";
import detailItemParams from "./childcomps/detailItemParams";

import Scroll from "components/common/scroll/Scroll";
import { geDetail, Goods, Shop, GoodsParams } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoods,
    detailShopInfo,
    detailGoodsInfo,
    detailItemParams,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
    };
  },
  created() {
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

      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);

      // 获取商品详情信息
      this.detailInfo = data.detailInfo;

      /* 获取参数数据 */
      this.itemParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 10;
  background: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
