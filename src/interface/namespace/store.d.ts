import type { RouteRecordRaw } from 'vue-router';

// store namespace
export namespace Store {
  // global state type
  export interface GlobalState {
    token: string;
    userInfo: Record<string, any>;
    layoutRoute: RouteRecordRaw | null;
    homeName: string;
  }

  // setting state type
  export interface SettingState {
    collapsed: boolean;
    language: 'zh' | 'en';
    isDark: boolean;
    showTabs: boolean;
    showTags: boolean;
    primary: string;
  }
}
