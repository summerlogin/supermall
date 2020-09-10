<template>
  <div class="tab-bar-item" @click="activeClick()">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods: {
    activeClick() {
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
      //  console.log(this.$route.path)
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style scoped>
.active {
  color: #d81e06;
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  box-shadow: 0 -1px rgba(228, 228, 229, 0.1);
  font-size: 12px;
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
  margin-top: 7px;
  vertical-align: middle;
  margin-bottom: 3px;
}
</style>
