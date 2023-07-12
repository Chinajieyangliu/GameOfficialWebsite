import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './https'
import commonCss from './style/common.css' // eslint-disable-line no-unused-vars

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.mixin({
  methods: {
    getAuthHeaders() {
      return { Authorization: `Bearer   ${localStorage.token || ''}` }
    }
  }
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
