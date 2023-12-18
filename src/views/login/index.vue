<template>
  <component :is="loginState" />
</template>

<script setup lang="tsx" name="login">
const loginState = () => (
  <div className="full flxc">
    <a-button type="primary">login-tsx-page</a-button>
  </div>
)
</script>

<style lang="less" scoped></style>
