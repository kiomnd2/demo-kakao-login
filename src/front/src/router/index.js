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
      if( window.Kakao.isInitialized() && store.state.accessToken != null) {
      next();
    }
    else {
      console.log("쿼리 리다이렉트!");
       next({
         path: '/',
         query: {redirect : to.fullPath}
       })
    }
  }
  else {
    next();
  }
  // next();
});

export default router;
