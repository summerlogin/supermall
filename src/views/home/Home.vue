<template>
  <div id="Home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" class="home-swiper" />
    <recommend-view :recommends="recommends" />
    <future />
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" />
    <goods-list :goods="showGoods" />
  </div>
</template>

<script>
import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import Future from "./childcomps/Future";

import NavBar from "components/common/navbar/NavBar";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    Future,
    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    /*请求banner数据 */
    this.getHomeMultidata();

    /* 请求商品数据 */
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    /* 商品属性显示 */
    showGoods() {
     return this.goods[this.currentType].list
    },
  },
  methods: {
    /* 事件监听的相关方法 */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;

        case 1:
          this.currentType = "new";
          break;

        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /* 网络请求的相关方法 */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
.nav-home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.nav-home {
  background: var(--color-tint);
  color: white;
}
.home-swiper {
  padding-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
