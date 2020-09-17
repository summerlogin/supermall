<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    /* 封装Bscroll对象 */
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
    });

    /* 监听滚动的位置 */
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll.refresh()
    }
  },
};
</script>

<style scoped>
</style>
