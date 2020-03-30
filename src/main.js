import Vue from 'vue';
import App from './App.vue';
import router from './router';
//import Ionic from '@ionic/vue';
//import Router from 'vue-router';
import '@ionic/core/css/ionic.bundle.css';

//Vue.use(Ionic);
//Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
