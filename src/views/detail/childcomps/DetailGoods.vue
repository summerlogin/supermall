<template>
  <div v-if="Object.keys(goods).length !=0" id="detail-goods">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span :style="{background:goods.discountBgColor}" class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span v-for="(item,index) in goods.columns" :key="index">{{item}}</span>
    </div>
    <div class="services">
      <div v-for="(item,index) in goods.services" :key="index">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoods",
  props: {
    goods: {},
  },
  mounted() {
    console.log(this.goods);
  },
};
</script>
<style scoped>
#detail-goods {
  padding: 8px 10px 0 10px;
  box-sizing: border-box;
}
.title {
  font-size: 16px;
  color: var(--color-textw);
}
.price {
  padding: 15px 0;
  position: relative;
}
.price .newPrice {
  font-size: 16px;
  color: var(--color-high-text);
}

.price .oldPrice {
  font-size: 10px;
  text-decoration: line-through;
  margin-left: 5px;
}

.price .discount {
  padding: 4px 2px;
  border-radius: 5px;
  font-size: 12px;
  color: var(--color-background);
  position: absolute;
  top: 10px;
  margin-left: 5px;
}
.columns {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #dfdede;
}

.columns span {
  font-size: 10px;
  color: var(--color-text);
}

.services {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid#dfdede;
  color: var(--color-textw);
}

.services div img {
  width: 10px;
  height: 10px;
}
</style>
