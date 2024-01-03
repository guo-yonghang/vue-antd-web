<template>
  <a-form ref="formRef" :model="formData" :rules="rules" :label-col="{ span: 6 }" autocomplete="autocomplete" colon v-bind="$attrs" @submit="handleSubmit" @reset="handleReset">
    <a-row :gutter="gridGutter">
      <template v-for="item in items" :key="item.key">
        <a-col :span="24 / gridCount">
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
        </a-col>
      </template>
    </a-row>
    <div class="super-form-submit" :style="{ justifyContent: footerAlign }">
      <slot name="footer" v-if="$slots.footer"></slot>
      <a-space v-else>
        <a-button html-type="reset">{{ cancelText }}</a-button>
        <a-button type="primary" html-type="submit">{{ submitText }}</a-button>
      </a-space>
    </div>
  </a-form>
</template>

<script setup lang="ts">
  import { ref, defineModel } from 'vue';
  import { SuperFormProps, SuperFormEmits } from './index';

  const emits = defineEmits<SuperFormEmits>();

  withDefaults(defineProps<SuperFormProps>(), {
    items: () => [],
    rules: () => ({}),
    gridCount: 2,
    gridGutter: () => [25, 0],
    showFooter: true,
    showCancel: true,
    cancelText: '取消',
    submitText: '保存',
    footerAlign: 'center',
  });

  const formData = defineModel<any>();

  const formRef = ref();

  const handleSubmit = (e) => {
    emits('submit', e);
  };

  const handleReset = (e) => {
    emits('reset', e);
  };

  defineExpose({
    formRef,
  });
</script>

<style scoped lang="less">
  .ant-picker {
    width: 100%;
  }

  .super-form-submit {
    margin-top: 10px;
    display: flex;
  }
</style>
