<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active:index === currIdex}"
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
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
</style>
