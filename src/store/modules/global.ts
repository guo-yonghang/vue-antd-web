import { defineStore } from 'pinia';
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';

interface GlobalStoreState {
  token: string;
  userInfo: {
    [key: string]: string | number;
  };
}

export const useGlobalStore = defineStore({
  id: 'vue-global',
  state: (): GlobalStoreState => ({
    token: '',
    userInfo: { name: '', age: 22 },
  }),
  getters: {},
  actions: {},
  persist: <PersistedStateOptions>{
    key: 'vue-global-state',
    storage: window.localStorage,
    paths: ['token', 'userInfo'],
  },
});
