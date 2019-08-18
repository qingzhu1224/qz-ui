import Vue from 'vue'
import App from './App.vue'
import VVUI from '../packages/index'
import '../packages/theme/lib/index.css' 
import demoBlock from './components/demo-block.vue'
import router from './router'
Vue.use(VVUI)


Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false


new Vue({
  router, //可以简写router
  render: h => h(App)
}).$mount('#app')
