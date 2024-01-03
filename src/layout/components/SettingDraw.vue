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
        <span>展示顶部栏：</span>
        <a-radio-group v-model:value="settingStore.showHeader" button-style="outline">
          <a-radio-button :value="true">展示</a-radio-button>
          <a-radio-button :value="false">隐藏</a-radio-button>
        </a-radio-group>
      </div>
    </div>
    <div class="setting-item">
      <div class="title">
        <span>展示标签栏：</span>
        <a-radio-group v-model:value="settingStore.showTabs" button-style="outline">
          <a-radio-button :value="true">展示</a-radio-button>
          <a-radio-button :value="false">隐藏</a-radio-button>
        </a-radio-group>
      </div>
    </div>
    <div class="setting-item">
      <div class="title">
        <span>展示吐司栏：</span>
        <a-radio-group v-model:value="settingStore.showBreadcrumb" button-style="outline">
          <a-radio-button :value="true">展示</a-radio-button>
          <a-radio-button :value="false">隐藏</a-radio-button>
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
    margin-bottom: 35px;

    .title {
      margin-bottom: 20px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
