import Vue from 'vue'
import router from './router';
import store from './store'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

store.state.accessToken = localStorage.getItem("accessToken");
store.state.refreshToken = localStorage.getItem("refreshToken");


Vue.use(VueMaterial);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
