import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLoading from './plugins/loading'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueLoading,
  render: h => h(App)
}).$mount('#app')
