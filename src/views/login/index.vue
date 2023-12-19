<template>
  <component :is="loginState" />
</template>

<script setup lang="tsx" name="login">
  const loginState = () => (
    <div class="full flxc">
      <a-button type="primary">login-tsx-page</a-button>
      <span style="color:rgb(var(--primary-6))">primary-color</span>
    </div>
  );
</script>

<style lang="less" scoped></style>
