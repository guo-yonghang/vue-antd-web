<template>
  <div class="chat-container">
    <div class="chat-friend"> chat-friend</div>
    <div class="chat-message">chat-message</div>
  </div>
</template>

<script setup lang="ts" name="/chat"></script>

<style scoped lang="less">
  .chat-container {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    overflow: hidden;
    display: flex;

    .chat-friend {
      min-width: 200px;
      background-color: yellow;
      //可横向缩放大小
    }
    .chat-message {
      flex: auto;
      background-color: aquamarine;
    }
  }
</style>
