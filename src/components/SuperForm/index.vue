<template>
  <a-form ref="formRef" :model="formData" :label-col="{ span: 6 }" autocomplete="autocomplete" colon v-bind="$attrs" @submit="handleSubmit">
    <template v-for="item in items" :key="item.key">
      <a-form-item :label="item.label" :name="item.key">
        <component :is="item.render" v-if="item.render" />
        <template v-else>
          <a-input v-if="item.type === 'input'" v-model:value="formData[item.key]" placeholder="请输入" allow-clear v-bind="item.attrs" />
          <a-select v-if="item.type === 'select'" v-model:value="formData[item.key]" placeholder="请选择" allow-clear v-bind="item.attrs" />
          <super-cascader v-if="item.type === 'cascader'" v-model="formData[item.key]" placeholder="请选择" allow-clear v-bind="item.attrs" />
          <a-date-picker v-if="item.type === 'date'" v-model:value="formData[item.key]" placeholder="请选择" allow-clear value-format="YYYY-MM-DD" v-bind="item.attrs" />
          <a-range-picker v-if="item.type === 'date-range'" v-model:value="formData[item.key]" allow-clear value-format="YYYY-MM-DD" v-bind="item.attrs" />
          <a-date-picker v-if="item.type === 'time'" v-model:value="formData[item.key]" placeholder="请选择" allow-clear show-time value-format="YYYY-MM-DD HH:mm:ss" v-bind="item.attrs" />
          <a-range-picker v-if="item.type === 'time-range'" v-model:value="formData[item.key]" allow-clear show-time value-format="YYYY-MM-DD HH:mm:ss" v-bind="item.attrs" />
        </template>
      </a-form-item>
    </template>
  </a-form>
</template>

<script setup lang="ts">
  import { ref, defineModel } from 'vue';
  import { SuperFormProps } from './index';

  const formData = defineModel<Record<string, any>>();

  withDefaults(defineProps<SuperFormProps>(), {
    items: () => [],
  });

  const formRef = ref();

  const handleSubmit = (e) => {
    console.log(e);
  };

  defineExpose({
    formRef,
  });
</script>

<style scoped lang="less"></style>
