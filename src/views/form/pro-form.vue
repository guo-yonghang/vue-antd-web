<template>
  <div>
    <super-form v-model="formData" :items="items" :grid-span="12" :grid-gutter="[25, 10]" :label-col="{ span: 5 }" style="padding-right: 50px" @submit="onSubmit" @reset="onReset" />
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
      span: 12,
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
      key: 'inputNumber',
      label: 'inputNumber',
      type: 'input-number',
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
    {
      key: 'radio',
      label: 'radio',
      type: 'radio',
      attrs: {
        options: [
          { label: 'resolve', value: 'resolve' },
          { label: 'reject', value: 'reject' },
          { label: 'pending', value: 'pending' },
        ],
      },
    },
    {
      key: 'checkbox',
      label: 'checkbox',
      type: 'checkbox',
      attrs: {
        options: [
          { label: 'resolve', value: 'resolve' },
          { label: 'reject', value: 'reject' },
          { label: 'pending', value: 'pending' },
        ],
      },
    },
    {
      key: 'rate',
      label: 'rate',
      type: 'rate',
      attrs: {
        tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
      },
    },
    {
      key: 'slider',
      label: 'slider',
      type: 'slider',
      attrs: {
        min: 1,
        max: 10,
      },
    },
  ];
</script>
