<template>
  <a-config-provider :local="local" :theme="theme">
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

  const theme = computed(() => {
    const { primary, radius } = settingStore;
    document.body.style.setProperty('--color', primary);
    document.body.style.setProperty('--radius', radius + 'px');
    return {
      token: {
        colorPrimary: primary,
        borderRadius: radius + 'px',
      },
    };
  });
</script>

<style scoped lang="less"></style>
