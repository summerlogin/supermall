<template>
  <div id="Home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childcomps/HomeSwiper";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
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
  background: var(--color-tint);
  color: white;
}
</style>
