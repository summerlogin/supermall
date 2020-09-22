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
    this.price = itemInfo.price;
    this.newPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.columns = columns;
    this.services = services;
  }
}
