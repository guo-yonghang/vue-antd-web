<template>
  <component :is="loginState" />
  <SvgIcon name="system" />
  <SvgIcon name="config" />
</template>

<script setup lang="tsx" name="login">
  import { getUserList, getUserDetail, delUser } from '@/api/modules/user';

  const loginState = () => (
    <div class=" flxc">
      <a-space>
        <a-button type="primary" onClick={handleUserList}>
          user-list
        </a-button>
        <a-button type="primary" onClick={handleUserDetail}>
          user-detail
        </a-button>
        <a-button type="primary" status="danger" onClick={handleUserDel}>
          user-delete
        </a-button>
      </a-space>
    </div>
  );

  const handleUserList = () => {
    getUserList({ pageNum: 1, pageSize: 10 }).then((res) => {
      console.log('user-list', res);
    });
  };

  const handleUserDetail = () => {
    getUserDetail('1').then((res) => {
      console.log('user-detail', res);
    });
  };

  const handleUserDel = () => {
    delUser('1').then((res) => {
      console.log('user-delete', res);
    });
  };
</script>

<style lang="less" scoped></style>
