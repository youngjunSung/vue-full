import Vue from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

Vue.use(SuiVue);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueFullPage);