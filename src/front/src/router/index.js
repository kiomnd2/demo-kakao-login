import Vue from 'vue'
import routes from "./routes";
import VueRouter from "vue-router";
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (!store.state.accessToken && to.path !== '/login') {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});


export default router;
