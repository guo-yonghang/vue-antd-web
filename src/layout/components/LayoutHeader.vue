<template>
  <a-space :size="20">
    <menu-unfold-outlined v-if="settingStore.collapsed" class="trigger" @click="settingStore.collapsed = false" />
    <menu-fold-outlined v-else class="trigger" @click="settingStore.collapsed = true" />
    <breadcrumb v-if="settingStore.showBreadcrumb" />
  </a-space>
  <header-menu />
</template>

<script lang="ts" setup>
  import { useSettingStore } from '@/store';
  import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
  import Breadcrumb from '@/layout/components/Breadcrumb.vue';
  import HeaderMenu from '@/layout/components/HeaderMenu.vue';

  const settingStore = useSettingStore();
</script>

<style lang="less" scoped>
  .trigger {
    padding: 8px;
    font-size: 18px;
    border-radius: var(--raiuds);
    cursor: pointer;

    &:hover {
      color: var(--primary);
      background-color: #eeeeee;
    }
  }
</style>
