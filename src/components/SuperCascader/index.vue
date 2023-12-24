<template>
  <a-cascader v-model:value="value" :options="options" placeholder="请选择" v-bind="$attrs"></a-cascader>
</template>

<script setup lang="ts" name="SuperCascader">
  import { computed } from 'vue';
  import { EmitsType, PropsType, OptionsListType } from './index';

  const emits = defineEmits<EmitsType>();

  const props = withDefaults(defineProps<PropsType>(), {
    options: () => [],
  });

  const value = computed({
    get: () => {
      if (Array.isArray(props.value)) {
        return props.value;
      } else {
        return findLevelGetValues(props.options, props.value);
      }
    },
    set: (e) => {
      if (Array.isArray(props.value)) {
        return emits('update:value', e);
      } else {
        return emits('update:value', e[e.length - 1]);
      }
    },
  });

  // find value in level and get value-array
  const findLevelGetValues = (list: OptionsListType, target: string | number, path: (string | number)[] = []): (string | number)[] => {
    for (let i = 0; i < list.length; i++) {
      const current = list[i];

      // if current is target return path
      if (current.value === target) {
        return [...path, current.value];
      }

      // if current has children, next
      if (current.children && current.children.length) {
        const result = findLevelGetValues(current.children, target, [...path, current.value]);
        if (result && result.length) return result;
      }
    }
    return [];
  };
</script>
