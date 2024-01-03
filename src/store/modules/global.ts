import { markRaw } from 'vue';
import { defineStore } from 'pinia';
import type { RouteRecordRaw } from 'vue-router';
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';
import { Store, MenuItemType } from '@/interface';
import { resultRoutes } from '@/constants';
import router from '@/router';
import Layout from '@/layout/index.vue';
// 模拟的路由列表
import mockMenuList from '@/assets/menu-list.ts';

export const useGlobalStore = defineStore({
  id: 'vue-global',
  state: (): Store.GlobalState => ({
    token: 'A3kmh2WjR2_FQFgEeTjJQ',
    userInfo: { name: '', age: 22 },
    layoutRoute: null,
    homeName: '',
  }),
  getters: {},
  actions: {
    initLayoutRoute() {
      // const { menuList } = this.userInfo;
      this.homeName = findHomeRouteName(mockMenuList);
      this.layoutRoute = {
        path: '/layout',
        name: 'layout',
        component: markRaw(Layout),
        redirect: this.homeName,
        children: formatRouteData(mockMenuList).concat(resultRoutes),
      };
      router.addRoute(this.layoutRoute);
    },
  },
  persist: <PersistedStateOptions>{
    key: 'vue-global-state',
    storage: window.localStorage,
    paths: ['token', 'userInfo'],
  },
});

// 递归处理所有路由数据
const formatRouteData = (list: MenuItemType[], parentPath: string = ''): RouteRecordRaw[] => {
  list.sort((prev, next) => {
    return prev.idx - next.idx;
  });
  const pageModules = {
    ...import.meta.glob('../../views/*.vue'),
    ...import.meta.glob('../../views/*/*.vue'),
  };
  const routes: RouteRecordRaw[] = [];
  list.forEach((item) => {
    const currentPath = `${parentPath}${parentPath ? '/' : ''}${item.path}`;
    const obj: RouteRecordRaw = {
      path: item.path,
      name: currentPath,
      meta: {
        title: item.title,
        enTitle: item.enTitle,
        icon: item.icon,
        visible: item.visible,
        keepAlive: item.keepAlive,
      },
      children: [],
    };
    if (item.type === 1) {
      obj.component = pageModules[`../../views${currentPath}.vue`];
    }
    if (item.type === 0 && item.children?.length) {
      obj.children = formatRouteData(item.children, currentPath);
    }
    routes.push(obj);
  });
  return routes;
};

// 递归查找首页路由名称
const findHomeRouteName = (list: MenuItemType[], parentName: string = ''): string => {
  if (!list.length) return '403';
  list.sort((prev, next) => {
    return prev.idx - next.idx;
  });
  const root = list[0];
  const currentName = `${parentName}${parentName ? '/' : ''}${root.path}`;
  if (root.type === 1) return currentName;
  if (root.children?.length) {
    return findHomeRouteName(root.children, currentName);
  }
  if (root.type !== 1 && !root.children?.length) {
    return findHomeRouteName(list.slice(1), currentName);
  }
  return '403';
};
