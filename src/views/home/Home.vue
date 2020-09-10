<template>
  <div id="Home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res)
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
