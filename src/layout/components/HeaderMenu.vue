<template>
  <a-space>
    <a-badge :count="7">
      <a-button shape="circle" @click="NoticeBoxRef.open()">
        <super-icon name="SoundOutlined" />
      </a-button>
    </a-badge>
    <a-button shape="circle" @click="SettingDrawRef.open()">
      <super-icon name="SettingOutlined" />
    </a-button>
    <a-button shape="circle" @click="toggleFullScreen">
      <super-icon name="FullscreenExitOutlined" v-if="isFullscreen" />
      <super-icon name="FullscreenOutlined" v-else />
    </a-button>
  </a-space>
  <notice-modal ref="NoticeBoxRef" />
  <setting-draw ref="SettingDrawRef" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useFullscreen } from '@vueuse/core';
  import NoticeModal from '@/layout/components/NoticeModal.vue';
  import SettingDraw from '@/layout/components/SettingDraw.vue';

  const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();

  const NoticeBoxRef = ref();
  const SettingDrawRef = ref();
</script>

<style lang="less" scoped></style>
