<template>
  <div>
    <super-form v-model="formData" :items="items" :grid-count="2" :grid-gutter="[25, 10]" :label-col="{ span: 5 }" style="padding-right: 50px" @submit="onSubmit" @reset="onReset" />
    <div style="margin-top: 100px">
      {{ formData }}
    </div>
  </div>
</template>

<script setup lang="tsx" name="/form/pro-form">
  import { Input, message } from 'ant-design-vue';
  import { reactive } from 'vue';

  const formData = reactive<any>({});

  const onSubmit = () => {
    message.success('submit');
  };

  const onReset = () => {
    message.success('reset');
  };

  const items = [
    {
      key: 'input',
      label: 'input',
      type: 'input',
    },
    {
      key: 'inputRender',
      label: 'inputRender',
      type: 'input',
      render: () => {
        return <Input v-model:value={formData.render} placeholder="请输入" />;
      },
    },
    {
      key: 'select',
      label: 'select',
      type: 'select',
      attrs: {
        options: [
          { label: 'resolve', value: 'resolve' },
          { label: 'reject', value: 'reject' },
          { label: 'pending', value: 'reject' },
        ],
      },
    },
    {
      key: 'cascader',
      label: 'cascader',
      type: 'cascader',
      attrs: {
        valueType: 'all',
        options: [
          {
            label: '一年级',
            value: '1',
            children: [
              { label: '一班', value: '1-1' },
              { label: '二班', value: '1-2' },
            ],
          },
          {
            label: '二年级',
            value: '2',
            children: [
              { label: '一班', value: '2-1' },
              { label: '二班', value: '2-2' },
            ],
          },
        ],
      },
    },
    {
      key: 'date',
      label: 'date',
      type: 'date',
    },
    {
      key: 'dateRange',
      label: 'dateRange',
      type: 'date-range',
    },
    {
      key: 'time',
      label: 'time',
      type: 'time',
    },
    {
      key: 'timeRange',
      label: 'timeRange',
      type: 'time-range',
    },
  ];
</script>
