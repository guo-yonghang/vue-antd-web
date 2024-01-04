import { defineStore } from 'pinia';
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';
import { Store } from '@/interface';

export const useSettingStore = defineStore({
  id: 'vue-setting',
  state: (): Store.SettingState => ({
    collapsed: false,
    language: 'zh',
    themeMode: 'light',
    menuMode: 'light',
    showHeader: true,
    showTabs: true,
    showBreadcrumb: true,
    primary: '#2F54EB',
    radius: 4,
    showDraw: false,
  }),
  getters: {},
  actions: {},
  persist: <PersistedStateOptions>{
    key: 'vue-setting-state',
    storage: window.localStorage,
    paths: ['collapsed', 'language', 'themeMode', 'menuMode', 'showHeader', 'showTabs', 'showBreadcrumb', 'primary', 'radius'],
  },
});
