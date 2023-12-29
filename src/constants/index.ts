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

// 主题色数组
export const colorList = [
  {
    key: '薄暮',
    color: '#F5222D',
  },
  {
    key: '火山',
    color: '#FA541C',
  },
  {
    key: '日暮',
    color: '#FAAD14',
  },
  {
    key: '明青',
    color: '#13C2C2',
  },
  {
    key: '极光绿',
    color: '#52C41A',
  },
  {
    key: '拂晓蓝',
    color: '#1890FF',
  },
  {
    key: '极客蓝',
    color: '#2F54EB',
  },
  {
    key: '酱紫',
    color: '#722ED1',
  },
];

// 菜单主题
export const menuModeList = [
  {
    key: '亮色菜单',
    icon: 'svg-light-menu',
    value: 'light',
  },
  {
    key: '暗黑菜单',
    icon: 'svg-dark-menu',
    value: 'dark',
  },
];
