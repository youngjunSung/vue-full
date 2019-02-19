import Vue from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import VueI18n from 'vue-i18n'
import messages from './message'

Vue.use(VueI18n);
Vue.use(SuiVue);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueFullPage);

const i18n = new VueI18n({
	locale: 'en', // set locale
	messages // set locale messages
});

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');

