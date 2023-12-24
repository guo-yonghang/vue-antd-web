<template>
  <a-cascader :value="getValue" @change="setValue" :options="options" placeholder="请选择" v-bind="$attrs"></a-cascader>
</template>

<script setup lang="ts" name="SuperCascader">
  import { computed } from 'vue';
  import { EmitsType, PropsType, OptionsListType } from './index';

  const emits = defineEmits<EmitsType>();

  const props = withDefaults(defineProps<PropsType>(), {
    modelValue: '',
    options: () => [],
    valueType: 'single',
  });

  // get computed value [didn't use the get set method because of a build warning]
  const getValue = computed(() => {
    if (!props.modelValue) return [];
    if (Array.isArray(props.modelValue)) {
      return props.modelValue;
    } else {
      return findLevelGetValues(props.options, props.modelValue);
    }
  });

  // set modelValue
  const setValue = (e: any[]) => {
    if (Array.isArray(props.modelValue)) {
      return emits('update:modelValue', e);
    } else {
      return emits('update:modelValue', e[e.length - 1]);
    }
  };

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
