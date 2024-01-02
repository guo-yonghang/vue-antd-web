<template>
  <a-button class="setting-affix" type="primary" :icon="h(SettingOutlined)" v-if="!settingStore.showHeader" @click="settingStore.showDraw = true" />
</template>

<script setup lang="ts">
  import { h } from 'vue';
  import { SettingOutlined } from '@ant-design/icons-vue';
  import { useSettingStore } from '@/store';

  const settingStore = useSettingStore();
</script>

<style scoped lang="less">
  .setting-affix {
    position: fixed;
    right: 0;
    top: 50%;
    z-index: 100;
    transform: translateY(-50%);
    border-radius: var(--radius) 0 0 var(--radius);
    cursor: pointer;
    opacity: 0.7;
    border: none;
  }
</style>
