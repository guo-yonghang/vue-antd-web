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
