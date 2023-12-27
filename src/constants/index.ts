// 结果页路由
export const resultRoutes = [
  {
    path: '/result-success',
    name: 'result-success',
    component: () => import('@/views/result/success.vue'),
    meta: {
      title: '成功页',
      enTitle: 'SuccessResult',
      visible: false,
      keepAlive: false,
      icon: '',
    },
  },
  {
    path: '/result-warning',
    name: 'result-warning',
    component: () => import('@/views/result/warning.vue'),
    meta: {
      title: '警告页',
      enTitle: 'WarningResult',
      visible: false,
      keepAlive: false,
      icon: '',
    },
  },
  {
    path: '/result-error',
    name: 'result-error',
    component: () => import('@/views/result/error.vue'),
    meta: {
      title: '错误页',
      enTitle: 'ErrorResult',
      visible: false,
      keepAlive: false,
      icon: '',
    },
  },
];
