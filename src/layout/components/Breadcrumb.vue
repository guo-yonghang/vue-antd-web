<template>
  <a-breadcrumb>
    <a-breadcrumb-item href="">
      <home-outlined />
    </a-breadcrumb-item>
    <a-breadcrumb-item href="">
      <user-outlined />
      <span>Application List</span>
    </a-breadcrumb-item>
    <a-breadcrumb-item>Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
  import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue';
</script>
