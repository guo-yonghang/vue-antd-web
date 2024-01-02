<template>
  <a-drawer v-model:open="settingStore.showDraw" title="系统设置" width="auto" placement="right">
    <div class="setting-item">
      <div class="title">菜单主题：</div>
      <switch-menu-mode />
    </div>
    <div class="setting-item">
      <div class="title">主题颜色：</div>
      <switch-color />
    </div>
    <div class="setting-item">
      <div class="title">系统圆角：</div>
      <switch-radius />
    </div>
    <div class="setting-item">
      <div class="title">
        <span>展示顶部：</span>
        <a-radio-group v-model:value="settingStore.showHeader" button-style="solid">
          <a-radio-button :value="true">展示</a-radio-button>
          <a-radio-button :value="false">不展示</a-radio-button>
        </a-radio-group>
      </div>
    </div>
  </a-drawer>
</template>

<script setup lang="ts">
  import { useSettingStore } from '@/store';
  import SwitchMenuMode from '@/layout/components/SwitchMenuMode.vue';
  import SwitchColor from '@/layout/components/SwitchColor.vue';
  import SwitchRadius from '@/layout/components/SwitchRadius.vue';

  const settingStore = useSettingStore();
</script>

<style scoped lang="less">
  .setting-item {
    margin-bottom: 15px;

    .title {
      font-weight: bold;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
