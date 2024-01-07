<template>
  <a-space>
    <template v-for="item in menuModeList" :key="item.value">
      <a-tooltip :title="item.key">
        <div class="item" @click="handleMode(item)">
          <super-icon :name="item.icon" type="svg" :iconStyle="{ width: '78px', height: '67px' }" />
          <span class="checked" v-if="settingStore.menuMode === item.value">
            <super-icon name="CheckOutlined" type="antd" :size="30" />
          </span>
        </div>
      </a-tooltip>
    </template>
  </a-space>
</template>

<script setup lang="ts">
  import { useSettingStore } from '@/store';
  import { useLoading } from '@/hooks';
  import { menuModeList } from '@/constants';

  const settingStore = useSettingStore();
  const { loading, setLoading } = useLoading();

  const handleMode = ({ value, key }) => {
    if (settingStore.menuMode === value) return;
    if (loading.value) return;
    setLoading(true, `菜单主题：${key}`);
    setTimeout(() => {
      settingStore.menuMode = value;
      setLoading(false);
    }, 800);
  };
</script>

<style scoped lang="less">
  .item {
    cursor: pointer;
    position: relative;

    .icon {
      border-radius: var(--radius);
      cursor: pointer;
    }

    .checked {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 10;
      transform: translateX(-50%) translateY(-50%);
      color: var(--primary);
    }
  }
</style>
