<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" />
    <div class="goods-item-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 45%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-item-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-item-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-item-info .price {
  color: var(--color-tint);
  margin-right: 20px;
}
.goods-item-info .collect{
  position: relative;
}
.goods-item-info .collect::before{
  width: 14px;
  height: 14px;
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>
