<template>
  <div ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },

};
</script>

<style scoped>
</style>
