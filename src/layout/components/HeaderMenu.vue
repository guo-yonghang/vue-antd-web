<template>
  <a-space :size="12">
    <a-button type="text" shape="circle" @click="NoticeBoxRef.open()">
      <a-badge :count="7">
        <super-icon name="BellOutlined" />
      </a-badge>
    </a-button>
    <a-button type="text" shape="circle" @click="SettingDrawRef.open()">
      <super-icon name="SettingOutlined" />
    </a-button>
    <a-button type="text" shape="circle" @click="toggleFullScreen">
      <super-icon name="FullscreenExitOutlined" v-if="isFullscreen" />
      <super-icon name="FullscreenOutlined" v-else />
    </a-button>
    <a-dropdown>
      <a-button type="text" :disabled="loading">
        <template #icon>
          <a-avatar class="avatar" src="https://th.bing.com/th/id/R.a13cd10a48326cf286beaf10fb049d77?rik=Kdj0Ac2jEIPtzw&pid=ImgRaw&r=0" :size="30" />
        </template>
        <span>逆境生长</span>
      </a-button>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <a-space>
              <super-icon name="UserOutlined" type="antd" :size="16" />
              <span>用户信息</span>
            </a-space>
          </a-menu-item>
          <a-menu-item key="2">
            <a-space>
              <super-icon name="LogoutOutlined" type="antd" :size="16" />
              <span>退出登录</span>
            </a-space>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-space>
  <notice-modal ref="NoticeBoxRef" />
  <setting-draw ref="SettingDrawRef" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useFullscreen } from '@vueuse/core';
  import { message, Modal } from 'ant-design-vue';
  import { useLoading } from '@/hooks';
  import NoticeModal from '@/layout/components/NoticeModal.vue';
  import SettingDraw from '@/layout/components/SettingDraw.vue';

  const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
  const { loading, setLoading } = useLoading();

  const NoticeBoxRef = ref();
  const SettingDrawRef = ref();

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === '2') {
      Modal.confirm({
        title: '提示',
        content: '确认要退出登录吗？',
        onOk() {
          setLoading(true, '处理中');
          setTimeout(() => {
            setLoading(false);
            message.success('已退出');
          }, 800);
        },
      });
    }
  };
</script>

<style lang="less" scoped>
  .avatar {
    margin-right: 4px;
    margin-bottom: 4px;
  }
</style>
