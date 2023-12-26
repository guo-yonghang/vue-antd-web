<template>
  <a-layout class="full">
    <tab-menu />
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
  import TabMenu from '@/layout/components/TabMenu.vue';

  const keepAliveList: string[] = [];
</script>

<style lang="less" scoped>
  .ant-layout-content {
    margin: 24px 16px;
    padding: 15px;
    background-color: #ffffff;
  }

  .fade-leave-active,
  .fade-enter-active {
    transition: opacity 280ms cubic-bezier(0.38, 0, 0.24, 1);
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
