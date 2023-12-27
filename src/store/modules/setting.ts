import { defineStore } from 'pinia';
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';
import { Store } from '@/interface';

export const useSettingStore = defineStore({
  id: 'vue-setting',
  state: (): Store.SettingState => ({
    collapsed: false,
    language: 'zh',
    isDark: false,
    showTabs: true,
    showTags: true,
    primary: '#1653ff',
  }),
  getters: {},
  actions: {},
  persist: <PersistedStateOptions>{
    key: 'vue-setting-state',
    storage: window.localStorage,
    paths: ['collapsed', 'language', 'isDark', 'showTabs', 'showTags', 'primary'],
  },
});
