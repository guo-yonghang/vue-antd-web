import { defineStore } from 'pinia';
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';
import { Store } from '@/interface';

export const useGlobalStore = defineStore({
  id: 'vue-global',
  state: (): Store.GlobalState => ({
    token: 'A3kmh2WjR2_FQFgEeTjJQ',
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
