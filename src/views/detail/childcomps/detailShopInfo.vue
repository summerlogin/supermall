<template>
  <div class="shop-info">
    <div class="shop-name">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="score-info">
      <div class="score-left">
        <div class="score-sell">
          <div class="shop-c">{{sellValue}}万</div>
          <div>总销量</div>
        </div>
        <div class="score-goods">
          <div class="shop-c">{{shop.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="score-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :style="{color : item.isBetter ? 'red' : 'green' }">{{item.score}}</td>
            <td
              :style="{background : item.isBetter ? 'red' : 'green',color:'white'}"
            >{{item.isBetter == true ? '高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="store-in">进店逛逛</div>
  </div>
</template>
<script>
export default {
  name: "detailShopInfo",
  props: {
    shop: {
      type: Object,
      dafalut() {
        return {};
      },
    },
  },
  computed: {
    sellValue() {
      return Math.round((this.shop.cSells / 10000) * 10) / 10;
    },
  },
};
</script>
<style scoped>
.shop-info {
  padding: 0 10px 0 10px;
}
.shop-name {
  padding: 20px 0;
  font-size: 14px;
}
.shop-name img {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 5rem;
}
.shop-name span {
  margin-left: 10px;
  position: relative;
  top: -8px;
}
.score-info {
  display: flex;
}
.score-left,
.score-right {
  flex: 1;
}
.score-left {
  display: flex;
  align-items: center;
  font-size: 12px;
  border-right: 1px solid #dfdede;
}
.score-left > div {
  flex: 1;
}
.score-sell,
.score-goods {
  text-align: center;
}
.score-left .shop-c {
  font-size: 13px;
  font-weight: bold;
  padding-bottom: 5px;
}
.score-right > table {
  font-size: 12px;
  margin: 0 auto;
  border-spacing: 7px;
}
.score {
  padding: 0 5px;
}
.store-in{
  width: 100px;
  height: 20px;
  background: #f5f2f2;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  border-radius: 5px;
  margin: 20px auto;
}
</style>
