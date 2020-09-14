import Vue from 'vue'
import router from './router';
import store from './store'
import App from './App.vue'
import KakaoApi from './api/kakao.api'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


store.state.accessToken = localStorage.getItem("accessToken");
store.state.refreshToken = localStorage.getItem("refreshToken");

Vue.use(VueMaterial);

const checkInitialized = async () => {
  if (!window.Kakao.isInitialized()) {
    const initKey = await KakaoApi.kakaoInit();
    window.Kakao.init(initKey);
  }
};

const initializeApp = () => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
};

checkInitialized().then(initializeApp);
