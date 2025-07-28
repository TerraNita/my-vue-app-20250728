<template>
    <div class="grandchild-component">
      <h3>孫コンポーネント</h3>
      <p>親からもらったメッセージ: **{{ grandchildMessage }}**</p>
      <button @click="emitEventToParent">親へイベントを通知</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  // 親コンポーネントから受け取るpropsを定義
  defineProps({
    grandchildMessage: {
      type: String,
      required: true
    }
  });
  
  // 親コンポーネントへイベントを発行するためのemitsを定義
  const emit = defineEmits(['grandchild-event']);
  
  // ボタンクリック時にイベントを発行するメソッド
  const emitEventToParent = () => {
    console.log('孫コンポーネントからイベントを発行');
    // イベント名 'grandchild-event' とデータを親に通知
    emit('grandchild-event', '孫からのデータです！');
  };
  </script>
  
  <style scoped>
  .grandchild-component {
    border: 1px dashed #35495e;
    padding: 10px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: #f0f8ff;
  }
  button {
    background-color: #4CAF50; /* Green */
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