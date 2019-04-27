import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import Notifications from 'vue-notification'
Vue.use(Notifications)
var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
