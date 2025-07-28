<template>
    <div class="grandchild-component">
      <h3>孫コンポーネント</h3>
      <p v-if="injectedMessage">App.vueから注入されたメッセージ: **{{ injectedMessage }}**</p>
      <p v-else>メッセージは注入されていません。</p>
  
      <button @click="changeInjectedMessage">注入されたメッセージを更新 (提供元に通知)</button>

      <p>親からもらったメッセージ: **{{ messageFromParent }}**</p>
      <button @click="emitMessage">注入されたメッセージを更新 (提供元に通知)</button>
    </div>
  </template>
  
  <script setup>
  import { inject, defineEmits } from 'vue'; // defineEmitsは不要
  
  const injectedMessage = inject('appMessageKey', 'デフォルトメッセージ');
  const updateAppMessage = inject('updateAppMessageKey');
  
  const changeInjectedMessage = () => {
    if (updateAppMessage) {
      const newMessage = '孫からApp.vueへ更新！ (' + new Date().toLocaleTimeString() + ')';
      updateAppMessage(newMessage);
    } else {
      console.warn('updateAppMessageKey が提供されていません。');
    }
  };

  const emitMessage = () => {
    defineEmits('grandchild-event', '孫からのデータです！');
  };
  // propsやemitの関連コードは全て削除
  </script>
  
  <style scoped>
  /* スタイルは同じで問題なし */
  .grandchild-component {
    border: 1px dashed #35495e;
    padding: 10px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: #f0f8ff;
  }
  button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  </style>