import { defineStore } from 'pinia';
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';
import { Store } from '@/interface';

export const useSettingStore = defineStore({
  id: 'vue-setting',
  state: (): Store.SettingState => ({
    collapsed: false,
    language: 'zh',
    themeMode: 'light',
    menuMode: 'dark',
    showHeader: true,
    showTabs: true,
    showTags: true,
    primary: '#2F54EB',
    radius: 6,
    showDraw: false,
  }),
  getters: {},
  actions: {},
  persist: <PersistedStateOptions>{
    key: 'vue-setting-state',
    storage: window.localStorage,
    paths: ['collapsed', 'language', 'themeMode', 'menuMode', 'showHeader', 'showTabs', 'showTags', 'primary', 'radius'],
  },
});
