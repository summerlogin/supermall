import axios from 'axios'
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: ``,
    timeout: 5000
  })
  // 2.1 axios的拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
  })

  //2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
  })

  // 3、发送真正的网络请求
  return instance(config)
}
