import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store';

Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
