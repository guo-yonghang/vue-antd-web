<template>
  <a-layout class="full">
    <a-layout-sider v-model:collapsed="settingStore.collapsed" :theme="settingStore.menuMode" :collapsed-width="60" width="220px" :collapsible="!settingStore.showHeader">
      <layout-sider />
    </a-layout-sider>
    <a-layout>
      <a-layout-header v-if="settingStore.showHeader">
        <layout-header />
      </a-layout-header>
      <a-layout-content class="full">
        <layout-content />
      </a-layout-content>
    </a-layout>
    <setting-draw />
    <setting-affix />
  </a-layout>
</template>

<script lang="ts" setup>
  import { useSettingStore } from '@/store';
  import SettingDraw from '@/layout/components/SettingDraw.vue';
  import SettingAffix from '@/layout/components/SettingAffix.vue';
  import LayoutHeader from '@/layout/components/LayoutHeader.vue';
  import LayoutSider from '@/layout/components/LayoutSider.vue';
  import LayoutContent from '@/layout/components/LayoutContent.vue';

  const settingStore = useSettingStore();
</script>

<style lang="less" scoped>
  .ant-layout-header {
    background-color: #ffffff !important;
    padding: 0 20px !important;
    height: 60px !important;
    border-left: 1px solid #eeeeee;
    border-radius: var(--radius);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ant-layout-sider {
    color: #ffffff;
    border-radius: var(--radius);
  }
</style>
