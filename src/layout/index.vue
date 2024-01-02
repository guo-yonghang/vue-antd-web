<template>
  <a-layout class="full">
    <a-layout-sider v-model:collapsed="settingStore.collapsed" :theme="settingStore.menuMode" :collapsed-width="60" width="220px" collapsible>
      <template #trigger>
        <menu-unfold-outlined v-if="settingStore.collapsed" class="trigger" />
        <menu-fold-outlined v-else class="trigger" />
      </template>
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
  </a-layout>
</template>

<script lang="ts" setup>
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
  import { useSettingStore } from '@/store';
  import LayoutHeader from '@/layout/components/LayoutHeader.vue';
  import LayoutSider from '@/layout/components/LayoutSider.vue';
  import LayoutContent from '@/layout/components/LayoutContent.vue';

  const settingStore = useSettingStore();
</script>

<style lang="less" scoped>
  .ant-layout-header {
    background-color: #ffffff !important;
    padding: 0 24px !important;
    height: 60px !important;
    border-left: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ant-layout-sider {
    color: #ffffff;
  }

  .trigger {
    font-size: 18px;

    &:hover {
      color: var(--primary);
    }
  }
</style>
