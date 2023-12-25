import { createRouter, createWebHistory, RouterOptions } from 'vue-router';
import { useGlobalStore } from '@/store';
import NProgress from 'nprogress';

const router = createRouter({
  history: createWebHistory(),
  routes: <RouterOptions['routes']>[
    {
      path: '/',
      name: 'home',
      redirect: '/layout',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/403',
      name: 'not-permission',
      component: () => import('@/views/error/403.vue'),
    },
    {
      path: '/500',
      name: 'server-error',
      component: () => import('@/views/error/500.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: () => import('@/views/error/404.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  const globalStore = useGlobalStore();
  const token = globalStore.token;
  if (token && !globalStore.layoutRoute) {
    globalStore.initLayoutRoute();
    return next({ path: to.path, replace: true });
  }
  if (to.path === '/login') {
    token && next(from.path);
    !token && next();
  } else {
    token && next();
    !token && next('/login');
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
