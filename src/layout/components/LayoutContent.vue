<template>
  <a-layout class="full">
    <tabs-menu v-if="settingStore.showTabs" />
    <a-layout-content>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive :include="keepAliveList">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useSettingStore, useTabStore } from '@/store';
  import TabsMenu from '@/layout/components/TabsMenu.vue';

  const tabStore = useTabStore();
  const settingStore = useSettingStore();

  const keepAliveList = computed(() => {
    return tabStore.tempList.map((item) => item.name);
  });
</script>

<style lang="less" scoped>
  .ant-layout-content {
    margin: 16px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: var(--radius);
  }

  .fade-leave-active,
  .fade-enter-active {
    transition: all 0.2s;
  }

  .fade-enter-from {
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(-30px);
  }

  .fade-leave-to {
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(30px);
  }
</style>
