import Vue from 'vue'
import Login from '../views/Login.vue'
import VueRouter from 'vue-router'
import ViewMian from '../views/ViewMian.vue'
import CategoriesEdit from '../views/CategoriesEdit.vue'
import CategoriesList from '../views/CategoriesList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
import ArticlesEdit from '../views/ArticlesEdit.vue'
import ArticlesList from '../views/ArticlesList.vue'
import AdsEdit from '../views/AdsEdit.vue'
import AdsList from '../views/AdsList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [
  // 注册登录页面
  {
    path: '/login',
    name: 'register',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/',
    name: 'ViewMian',
    component: ViewMian,
    children: [
      {
        path: '/categories/create',
        name: 'create',
        component: CategoriesEdit
      },
      {
        path: '/categories/list',
        name: 'list',
        component: CategoriesList
      },
      // 点击编辑文件弹出的分类
      {
        path: '/categories/edit/:id',
        component: CategoriesEdit,
        props: true
      },
      {
        path: '/items/create',
        component: ItemEdit
      },
      {
        path: '/items/list',
        component: ItemList
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true
      },
      {
        path: '/heros/create',
        component: HeroEdit
      },
      {
        path: '/heros/list',
        component: HeroList
      },
      {
        path: '/heros/edit/:id',
        component: HeroEdit,
        props: true
      },

      {
        path: '/articles/create',
        component: ArticlesEdit
      },
      {
        path: '/articles/list',
        component: ArticlesList
      },
      {
        path: '/articles/edit/:id',
        component: ArticlesEdit,
        props: true
      },

      {
        path: '/ads/create',
        component: AdsEdit
      },
      {
        path: '/ads/list',
        component: AdsList
      },
      {
        path: '/ads/edit/:id',
        component: AdsEdit,
        props: true
      },
      {
        path: '/admin_users/create',
        component: AdminUserEdit
      },
      {
        path: '/admin_users/list',
        component: AdminUserList
      },
      {
        path: '/admin_users/edit/:id',
        component: AdminUserEdit,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
