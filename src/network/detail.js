import { request } from './request'

/* banner */
export function geDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 商品信息
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}
