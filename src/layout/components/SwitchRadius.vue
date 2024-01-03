<template>
  <div class="switch-radius">
    <a-progress :percent="settingStore.radius * 2" :format="(percent) => percent / 2 + 'px'" />
    <div class="flx">
      <a-button class="flx1" :icon="h(MinusOutlined)" block :disabled="settingStore.radius === 0" @click="settingStore.radius--" />
      <a-button class="flx1 ml5" :icon="h(PlusOutlined)" block :disabled="settingStore.radius === 50" @click="settingStore.radius++" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { h } from 'vue';
  import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { useSettingStore } from '@/store';

  const settingStore = useSettingStore();
</script>
