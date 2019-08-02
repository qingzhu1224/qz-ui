import Vue from 'vue'
import App from './App.vue'
import VVUI from '../packages/index'
Vue.use(VVUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
