<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabOffsetTop1"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="2"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <div>
        <home-swiper :banners="banners" class="home-swiper" @swiperImgLoad="swiperImgLoad" />
        <recommend-view :recommends="recommends" />
        <future />
        <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabOffsetTop2" />
        <goods-list :goods="showGoods" />
      </div>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import Future from "./childcomps/Future";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/untils/untils";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    Future,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
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
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
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
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 1000);
    /* 监听listItem中图片加载完成 */
    this.$bus.$on("ListImgLoad", () => {
      refresh();
    });
  },
  computed: {
    /* 商品属性显示 */
    showGoods() {
      return this.goods[this.currentType].list;
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
      this.$refs.tabOffsetTop1.currentType = index;
      this.$refs.tabOffsetTop2.currentType = index;
    },
    backTop() {
      /* 把内容滚动到顶部 */
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      /* 判断BackTo是否显示 */
      this.isShowBackTop = -position.y > 1000;

      /* 决定tabControl是否吸顶（position:fixed） */
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      //上拉加载更多
      this.getHomeGoods(this.currentType);
    },
    swiperImgLoad() {
      /* 获取TabBarItem的offsetTop */
      this.tabOffsetTop = this.$refs.tabOffsetTop2.$el.offsetTop;
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

        /* 完成上拉加载更多 */
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
  /* padding-top: 40px; */
}
.nav-home {
  background: var(--color-tint);
  color: white;
}
.content {
  /* height: calc(100% - 93px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>
