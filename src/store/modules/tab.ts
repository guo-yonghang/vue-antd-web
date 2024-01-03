import { defineStore } from 'pinia';
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';
import { Store } from '@/interface';
import { useGlobalStore } from '@/store';
import router from '@/router';

export const useTabStore = defineStore({
  id: 'vue-tab',
  state: (): Store.TabState => ({
    tempList: [],
  }),
  getters: {},
  actions: {
    addTab(current: Record<string, any>) {
      if (current.meta.keepAlive && !this.tempList.find((i) => i.name === current.name)) {
        const globalStore = useGlobalStore();
        this.tempList[globalStore.homeName === current.name ? 'unshift' : 'push']({
          name: current.name,
          title: current.meta.title,
          enTitle: current.meta.enTitle,
          icon: current.meta?.icon,
        });
      }
    },
    removeTab(name: string, isCurrent: boolean) {
      if (isCurrent) {
        this.tempList.forEach((item, index) => {
          if (item.name !== name) return;
          const nextTab = this.tempList[index + 1] || this.tempList[index - 1];
          nextTab && router.push(nextTab.name);
        });
      }
      this.tempList = this.tempList.filter((item) => item.name !== name);
    },
  },
  persist: <PersistedStateOptions>{
    key: 'vue-tab-state',
    storage: window.sessionStorage,
    paths: ['tempList'],
  },
});
