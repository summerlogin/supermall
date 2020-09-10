<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background: #f4f4f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
/* .tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  box-shadow: 0 -1px rgba(228, 228, 229, 0.1);
}
.tab-bar-item img{
  width: 20px;
  height: 20px;
} */
</style>
