import Vue from 'vue';
import Http from '_ser/index';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false;
Vue.use(Http);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
