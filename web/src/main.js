// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRounter from 'vue-router';
import App from './App';
import store from './store/signup';
import { routes } from './router/routes';

Vue.use(Vuex);
Vue.use(VueRounter);

Vue.config.productionTip = false;

const router = new VueRounter({
  routes,
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  router,
  template: '<App/>',
});
