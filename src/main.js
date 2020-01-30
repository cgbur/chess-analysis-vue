import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/theme.scss'

// importing styling
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

// adding vue material plugin
Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
