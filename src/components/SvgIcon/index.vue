<template>
  <svg :style="iconStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
  import { computed, CSSProperties } from 'vue';

  interface SvgProps {
    name: string;
    prefix?: string;
    iconStyle?: CSSProperties;
  }

  const props = withDefaults(defineProps<SvgProps>(), {
    prefix: 'icon',
    iconStyle: () => ({ width: '20px', height: '20px' }),
  });

  const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
