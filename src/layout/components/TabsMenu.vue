<template>
  <div class="tab-menu">
    <a-tabs :activeKey="route.name" hide-add type="editable-card" size="small" @tabClick="handleTabClick" @edit="handleTabEdit">
      <a-tab-pane v-for="pane in tabStore.tempList" :key="pane.name" :closable="pane.name !== globalStore.homeName" :class="{ home: pane.name === globalStore.homeName }">
        <template #tab>
          <span class="flxsc">
            <template v-if="pane.icon">
              <img :src="pane.icon" style="width: 16px; height: 16px" alt="menu-icon" v-if="isHttp(pane.icon)" />
              <super-icon :name="pane.icon" :type="pane.icon.includes('svg-') ? 'svg' : 'antd'" size="16" v-else />
            </template>
            <span class="ml4">{{ pane[settingStore.language === 'zh' ? 'title' : 'enTitle'] }}</span>
          </span>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="tsx" setup>
  import { onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useTabStore, useGlobalStore, useSettingStore } from '@/store';
  import { isHttp } from '@/utils';
  import Sortable from 'sortablejs';

  const route = useRoute();
  const router = useRouter();
  const tabStore = useTabStore();
  const globalStore = useGlobalStore();
  const settingStore = useSettingStore();

  onMounted(() => {
    initSortable();
  });

  const initSortable = () => {
    Sortable.create(document.querySelector('.ant-tabs-nav-list') as HTMLElement, {
      draggable: '.ant-tabs-tab.ant-tabs-tab-with-remove',
      animation: 300,
      onEnd({ newIndex, oldIndex }) {
        const newList = [...tabStore.tempList];
        const currRow = newList.splice(oldIndex as number, 1)[0];
        newList.splice(newIndex as number, 0, currRow);
        tabStore.tempList = newList;
      },
    });
  };

  const handleTabClick = (name: string) => {
    router.push(name);
  };

  const handleTabEdit = (name: string) => {
    tabStore.removeTab(name, name === route.name);
  };
</script>

<style lang="less" scoped>
  .tab-menu {
    width: 100%;
    padding-top: 4px;
  }

  :deep(.ant-tabs-nav) {
    margin-bottom: 0;

    .ant-tabs-tab {
      user-select: none;
    }
  }
</style>
