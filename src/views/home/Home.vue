<template>
  <div id="Home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" class="home-swiper" />
    <recommend-view :recommends="recommends" />
    <future></future>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childcomps/HomeSwiper";
import { getHomeMultidata } from "network/home";
import RecommendView from "./childcomps/RecommendView";
import Future from "./childcomps/Future";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Future,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
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
.home-swiper{
  padding-top: 44px;
}
</style>
