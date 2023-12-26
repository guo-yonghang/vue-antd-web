<template>
  <svg :style="styles" aria-hidden="true" v-if="type === 'svg'">
    <use :xlink:href="symbolId" />
  </svg>
  <component :is="name" :style="styles" v-bind="$attrs" v-if="type === 'antd'"></component>
</template>

<script setup lang="tsx" name="SuperIcon">
  import { computed, CSSProperties } from 'vue';

  interface SvgProps {
    name: string;
    type?: 'svg' | 'antd';
    size?: number | string;
    iconStyle?: CSSProperties;
  }

  const props = withDefaults(defineProps<SvgProps>(), {
    type: 'antd',
    iconStyle: () => ({ width: '20px', height: '20px' }),
  });

  // super-icon's sybolId
  const symbolId = computed(() => `#${props.name}`);

  // super-icon's style
  const styles = computed(() => {
    if (!props.size) return props.iconStyle;
    return {
      ...props.iconStyle,
      width: props.size + 'px',
      height: props.size + 'px',
    };
  });
</script>
