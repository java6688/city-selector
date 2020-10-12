import Vue from 'vue'
import App from './App.vue'
import { Tabs, TabPane } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.css'

Vue.use(Tabs)
Vue.use(TabPane)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
