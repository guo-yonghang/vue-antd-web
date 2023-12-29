<template>
  <div class="switch-color">
    <a-space :size="6">
      <template v-for="item in colorList" :key="item.color">
        <a-tooltip :title="item.key">
          <a-button :class="['item', 'flxc', { checked: settingStore.primary === item.color }]" :style="{ backgroundColor: item.color }" @click="handleColor(item)"></a-button>
        </a-tooltip>
      </template>
    </a-space>
    <div class="line" :style="{ left }"></div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { message } from 'ant-design-vue';
  import { useSettingStore } from '@/store';
  import { useLoading } from '@/hooks';
  import { colorList } from '@/constants';

  const settingStore = useSettingStore();
  const { loading, setLoading } = useLoading();

  const left = computed(() => {
    const index = colorList.findIndex((i) => i.color === settingStore.primary);
    return index * 36 + 'px';
  });

  const handleColor = ({ color, key }: Record<string, string>) => {
    if (color === settingStore.primary) return;
    if (loading.value) return;
    setLoading(true);
    message.loading({ content: `主题颜色：${key}`, duration: 1 });
    setTimeout(() => {
      settingStore.primary = color;
      setLoading(false);
    }, 800);
  };
</script>

<style scoped lang="less">
  .switch-color {
    position: relative;

    .item {
      width: 30px;
      height: 30px;
      color: #ffffff;
      font-size: 12px;
      border-radius: var(--radius);
      cursor: pointer;
      border: none;
    }

    .line {
      width: 30px;
      height: 3px;
      position: absolute;
      bottom: -6px;
      left: 0;
      z-index: 10;
      background-color: var(--primary);
      border-radius: var(--radius);
      transform: scaleX(0.9);
      transition: left 300ms;
    }
  }
</style>
