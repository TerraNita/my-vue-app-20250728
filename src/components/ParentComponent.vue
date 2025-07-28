<template>
    <div class="parent-component">
      <h2>親コンポーネント</h2>
      <p>私は祖父母と孫の間にいますが、直接データを受け渡していません。</p>
      <p>★親からもらったメッセージ: **{{ messageFromParent }}**</p>
      <GrandchildComponent />

    </div>

  </template>

  <script setup>
  import { ref } from 'vue';
  import GrandchildComponent from './GrandchildComponent.vue';
  // provide/injectのサンプルでは、このParentComponentはデータを受け渡さないため、
  // definePropsやdefineEmitsは不要です。
  const messageFromParent = ref('こんにちは、App.vueからのメッセージです！');


  emit('appMessageKey', messageFromParent);

// 孫コンポーネントからメッセージを更新するための関数も提供
const updateAppMessage = (newMessage) => {
  appMessage.value = newMessage;
};
provide('updateAppMessageKey', updateAppMessage);
  </script>
  
  <style scoped>
  .parent-component {
    border: 2px solid #42b983;
    padding: 15px;
    margin: 20px 0;
    border-radius: 8px;
    background-color: #e6f7ef;
  }
  </style>