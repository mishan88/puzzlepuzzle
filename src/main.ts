import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCompositionAPI, { provide } from '@vue/composition-api'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  setup () {
    provide('vuex-store', store)
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
