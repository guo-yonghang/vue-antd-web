<template>
  <a-space>
    <a-button shape="circle">
      <super-icon name="SoundOutlined" />
    </a-button>
    <a-button shape="circle" href="https://github.com/guo-yonghang/vue-study" target="_blank">
      <super-icon name="GithubOutlined" />
    </a-button>
    <a-button shape="circle">
      <super-icon name="SettingOutlined" />
    </a-button>
    <a-button shape="circle" @click="toggleFullScreen">
      <super-icon name="FullscreenExitOutlined" v-if="isFullscreen" />
      <super-icon name="FullscreenOutlined" v-else />
    </a-button>
  </a-space>
</template>

<script lang="ts" setup>
  import { useFullscreen } from '@vueuse/core';

  const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
</script>

<style lang="less" scoped></style>
