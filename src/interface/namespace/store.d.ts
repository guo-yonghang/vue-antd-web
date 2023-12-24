// store namespace
export namespace Store {
  // global state type
  export interface GlobalState {
    token: string;
    userInfo: {
      [key: string]: string | number;
    };
  }

  // setting state type
  export interface SettingState {
    isCollapse: boolean;
    language: 'zh' | 'en';
    isDark: boolean;
    showTabs: boolean;
    showTags: boolean;
    primary: string;
  }
}
