import { request } from './request'

/* banner请求 */
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

/* 商品属性请求 */
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
