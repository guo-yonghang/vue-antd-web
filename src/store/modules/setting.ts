import { defineStore } from 'pinia';
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';

interface SettingStoreState {
  isCollapse: boolean;
  language: 'zh' | 'en';
  isDark: boolean;
  showTabs: boolean;
  showTags: boolean;
  primary: string;
}

export const useSettingStore = defineStore({
  id: 'vue-global',
  state: (): SettingStoreState => ({
    isCollapse: false,
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
    paths: ['isCollapse', 'language', 'isDark', 'showTabs', 'showTags', 'primary'],
  },
});
