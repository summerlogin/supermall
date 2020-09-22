import Vue from 'vue'
import Vuerouter from 'vue-router'
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const CateGory = () => import('views/category/CateGory')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')


// 安装插件
Vue.use(Vuerouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/cateGory',
    component: CateGory
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
//创建router
const router = new Vuerouter({
  routes,
  mode: 'history'

})

export default router
