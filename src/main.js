import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'

Vue.config.productionTip = false
// Vue.component(VueQrcode.name, VueQrcode)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
