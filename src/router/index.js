import Vue from 'vue'
import Vuerouter from 'vue-router'
const Home = () => import('@/views/home/Home')
const Cart = () => import('@/views/cart/Cart')
const CateGory = () => import('@/views/category/CateGory')
const Profile = () => import('@/views/profile/Profile')


// 安装插件
Vue.use(Vuerouter)

const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/CateGory',
    component: CateGory
  },
  {
    path: '/Profile',
    component: Profile
  }
]
//创建router
const router = new Vuerouter({
  routes,
  mode: 'history'

})

export default router
