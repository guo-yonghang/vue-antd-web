<template>
  <a-config-provider :local="local">
    <router-view></router-view>
  </a-config-provider>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useSettingStore } from '@/store';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import enUs from 'ant-design-vue/es/locale/en_US';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';

  const settingStore = useSettingStore();

  const local = computed(() => {
    dayjs.locale(settingStore.language === 'zh' ? 'zh-cn' : 'en');
    return settingStore.language === 'zh' ? zhCN : enUs;
  });
</script>

<style scoped lang="less"></style>
