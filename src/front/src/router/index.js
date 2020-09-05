import Vue from 'vue'
import routes from "./routes";
import store from '../store'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // 만약 이동하는 페이지가 처음 로그인 페이지가 아닐 때
  if(to.path !== '/') {
    // 인증해야됀다..
    console.log(window.Kakao.isInitialized());
    console.log(store.state);
    if( window.Kakao.isInitialized() && store.state.accessToken != null) {
      next();
    }
    else {
      router.push("/"); // 로그인으로 돌아가라
    }
  }
  // next();
});

export default router;