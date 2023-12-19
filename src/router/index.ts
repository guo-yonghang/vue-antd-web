import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(to.path);
  console.log(from.path);
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
