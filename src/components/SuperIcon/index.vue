<template>
  <svg :style="styles" aria-hidden="true" v-if="type === 'svg'">
    <use :xlink:href="context" />
  </svg>
  <component :is="context" :style="styles" v-bind="$attrs" v-if="type === 'antd'"></component>
</template>

<script setup lang="tsx" name="SuperIcon">
  import { computed, CSSProperties } from 'vue';
  import * as Icons from '@ant-design/icons-vue';

  interface SvgProps {
    name: string;
    type?: 'svg' | 'antd';
    size?: number | string;
    iconStyle?: CSSProperties;
  }

  const props = withDefaults(defineProps<SvgProps>(), {
    type: 'antd',
    size: 20,
    iconStyle: () => ({}),
  });

  const context = computed(() => {
    if (props.type === 'svg') {
      return `#${props.name}`;
    }
    if (props.type === 'antd') {
      return (Icons as Record<string, any>)[props.name];
    }
    return null;
  });

  const styles = computed(() => {
    return {
      width: props.size + 'px',
      height: props.size + 'px',
      fontSize: props.size + 'px',
      ...props.iconStyle,
    };
  });
</script>
