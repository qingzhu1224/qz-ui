import Vue from 'vue'
import App from './App.vue'
import VVUI from '../packages/index'
import '../packages/theme/lib/index.css' 
import VueRouter from 'vue-router'
import demoBlock from './components/demo-block.vue'
Vue.use(VVUI)

Vue.use(VueRouter)

Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false

let router = new VueRouter({
  routes: [
      //一个个对象
      { path: '/home',  component: r => require.ensure([], () => r(require('../doc/test.md'))) }
  ]
});

new Vue({
  router: router, //可以简写router
  render: h => h(App)
}).$mount('#app')
