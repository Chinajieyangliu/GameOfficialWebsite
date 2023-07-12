// 初始化专区
import Vue from 'vue'
import App from './App.vue'
// css样式专区
import mainStyle from './style/mainStyle.scss'
import 'swiper/dist/css/swiper.css'
import iconStyle from './assets/iconfont/iconfontFile/iconfont.css'
// 选项卡heaters通用模板
import cardStyle from './components/card.vue'
Vue.component('m-card', cardStyle)
// 选项卡主题body通用模板
import cardList from './components/cardList.vue'
Vue.component('m-card-list', cardList)

// js样式专区
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// 定义全局的axios请求
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.Vue_App_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
