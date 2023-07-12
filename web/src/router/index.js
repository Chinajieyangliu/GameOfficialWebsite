import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main.vue'
import index from '../views/index.vue'
import Article from '../views/Article.vue'
import Hero from '../views/Hero.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 主页面框架，其他页面均在该页面进行页面跳转
    path: '/',
    name: 'main',
    component: main,
    children: [
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
        path: '/article/:id',
        name: 'article',
        component: Article,
        props: true
      }
    ]
  },
  {
    path: '/heroes/:id',
    name: 'hero',
    component: Hero,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
