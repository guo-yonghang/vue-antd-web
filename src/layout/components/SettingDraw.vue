<template>
  <a-drawer v-model:open="visible" title="系统设置" placement="right">
    <!--    <div class="setting-item">-->
    <!--      <div class="title">主题模式：</div>-->
    <!--      <div class="theme-box" style="background-color: red">-->
    <!--        <div class="theme-item">-->
    <!--          <super-icon name="svg-light" type="svg" :iconStyle="{ width: '88px', height: '48px' }" />-->
    <!--        </div>-->
    <!--        <div class="theme-item">-->
    <!--          <super-icon name="svg-dark" type="svg" :iconStyle="{ width: '88px', height: '48px' }" />-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </a-drawer>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useSettingStore } from '@/store';

  const settingStore = useSettingStore();

  const visible = ref<boolean>(false);

  defineExpose({
    open() {
      visible.value = true;
    },
  });
</script>

<style scoped lang="less">
  .setting-item {
    .title {
      font-weight: bold;
    }
  }
</style>
