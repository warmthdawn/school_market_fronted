import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui'
import router from './router'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false
Vue.use(MuseUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
