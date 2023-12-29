<template>
  <a-drawer v-model:open="visible" title="系统设置" width="auto" placement="right">
    <div class="setting-item">
      <div class="title">菜单主题：</div>
      <switch-menu-mode />
    </div>
    <div class="setting-item">
      <div class="title">主题颜色：</div>
      <switch-color />
    </div>
  </a-drawer>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  // import { useSettingStore } from '@/store';
  import SwitchMenuMode from '@/layout/components/SwitchMenuMode.vue';
  import SwitchColor from '@/layout/components/SwitchColor.vue';

  // const settingStore = useSettingStore();

  const visible = ref<boolean>(false);

  defineExpose({
    open() {
      visible.value = true;
    },
  });
</script>

<style scoped lang="less">
  .setting-item {
    margin-bottom: 30px;

    .title {
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
</style>
