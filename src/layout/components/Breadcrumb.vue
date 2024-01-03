<template>
  <a-breadcrumb separator=">">
    <a-breadcrumb-item>
      <home-outlined />
    </a-breadcrumb-item>
    <template v-for="item in route.matched" :key="item.name">
      <a-breadcrumb-item v-if="item.name !== 'layout'">
        <span>{{ item.meta[settingStore.language === 'zh' ? 'title' : 'enTitle'] }}</span>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import { useSettingStore } from '@/store';
  import { HomeOutlined } from '@ant-design/icons-vue';

  const route = useRoute();
  const settingStore = useSettingStore();

  console.log(route);
</script>
