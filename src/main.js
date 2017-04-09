// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import filters from './filters'
import 'element-ui/lib/theme-default/index.css'
// import '@/assets/css/base.less'
// import '@/assets/css/variable.less'

Vue.use(VueResource)

Vue.use(Element)

Vue.http.options.root = '/api'

Vue.config.productionTip = false

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
