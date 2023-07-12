import axios from 'axios'
import Vue from 'vue'
import router from './router'
const http = axios.create({
  // baseURL: 'http://localhost:3000/admin/api'
  // 停用上线使用的baseURL
  baseURL: process.env.Vue_App_API_URL || '/admin/api'
})
// 给服务端加上请求头
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (localStorage.token) {
      config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 当请求数据相应回来的状态码大于200时，对错误的通用处理
http.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: 'error',
        message: err.response.data.message
      })
    }
    if (err.response.status === 401) {
      Vue.prototype.$message({
        type: 'error',
        message: err.response.data.message
      })
      router.push('/login')
    }

    return Promise.reject(err)
  }
)
export default http
