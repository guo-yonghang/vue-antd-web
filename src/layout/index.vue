<template>
  <a-layout class="full">
    <a-layout-sider v-model:collapsed="collapsed" theme="dark" collapsible>
      <template #trigger>
        <menu-unfold-outlined v-if="collapsed" class="trigger" />
        <menu-fold-outlined v-else class="trigger" />
      </template>
      <layout-sider />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <layout-header />
      </a-layout-header>
      <a-layout-content class="full">
        <layout-content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
  import LayoutHeader from '@/layout/components/LayoutHeader.vue';
  import LayoutSider from '@/layout/components/LayoutSider.vue';
  import LayoutContent from '@/layout/components/LayoutContent.vue';

  const collapsed = ref<boolean>(false);
</script>

<style lang="less">
  .ant-layout-header {
    background-color: #ffffff !important;
    padding: 0 24px !important;
    height: 50px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ant-layout-sider {
    color: #ffffff;
  }

  .trigger {
    font-size: 18px;
  }

  .trigger:hover {
    color: #1890ff;
  }
</style>
