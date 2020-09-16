<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active:index === currIdex}"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currIdex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currIdex = index;
      this.$emit('tabClick',index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  background: white;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  z-index: 10;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>
