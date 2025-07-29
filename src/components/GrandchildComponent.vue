<!-- src/components/GrandchildComponent.vue -->
<template>
    <div class="grandchild-component">
      <h3>孫コンポーネント</h3>
      <!-- App.vueから直接注入されたメッセージを表示 -->
      <p v-if="injectedMessage">App.vueから注入されたメッセージ: **{{ injectedMessage }}**</p>
      <p v-else>メッセージは注入されていません。</p>
  
      <button @click="changeInjectedMessage">注入されたメッセージを更新 (提供元に通知)</button>

      <h3>孫コンポーネント</h3>
      <p>現在のカウント: **{{ count }}**</p>
      <p>ダブルカウント: **{{ doubleCount }}**</p>
      <button @click="handleIncrement">親へカウントを渡す (カウントアップ)</button>
      <button @click="handleDecrement">カウントダウン</button>
    </div>
  </template>
  
  <script setup>
  import { inject, defineEmits, watch } from 'vue';
  import { useCounter } from '../composables/useCounter'; // コンポーザブルをインポート
  
  // useCounter コンポーザブルを利用
  const { count, increment, decrement, doubleCount } = useCounter(0);

  // 親コンポーネントへイベントを発行するためのemitsを定義
  const emit = defineEmits(['increment']);

  // カウント値の変更をリアルタイムで親に通知
  watch(count, (newCount) => {
    emit('increment', newCount);
  }, { immediate: true }); // immediate: trueで初期値も送信

  // カウントアップボタンのハンドラ
  const handleIncrement = () => {
    increment();
  };

  // カウントダウンボタンのハンドラ
  const handleDecrement = () => {
    decrement();
  };

  // App.vueで提供された 'appMessageKey' を注入
  // 第二引数はデフォルト値。もし提供元がデータを提供しなかった場合にこの値が使われる。
  const injectedMessage = inject('appMessageKey', 'デフォルトメッセージ');
  
  // App.vueで提供された更新関数を注入
  const updateAppMessage = inject('updateAppMessageKey');
  
  const changeInjectedMessage = () => {
    if (updateAppMessage) {
      const newMessage = '孫からApp.vueへ更新！ (' + new Date().toLocaleTimeString() + ')';
      updateAppMessage(newMessage); // 提供された関数を呼び出してApp.vueのデータを更新
    } else {
      console.warn('updateAppMessageKey が提供されていません。');
    }
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
    background-color: #007bff; /* Blue */
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