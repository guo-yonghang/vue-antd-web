<template>
  <template v-if="type === 'image'">
    <a-upload v-model:file-list="fileList" list-type="picture-card" :show-upload-list="true" v-bind="$attrs" :before-upload="beforeUpload" :custom-request="customRequest" @change="handleChange">
      <div v-if="fileList.length < limit">
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
  </template>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { SuperUploadProps } from './index';

  withDefaults(defineProps<SuperUploadProps>(), {
    modelValue: () => [],
    type: 'image',
    limit: 9,
  });

  const fileList = ref([
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  const beforeUpload = (e) => {
    console.log('before', e);
  };

  const handleChange = (e) => {
    console.log('change', e);
  };

  const customRequest = (e) => {
    console.log('custom', e);
  };
</script>

<style scoped></style>
