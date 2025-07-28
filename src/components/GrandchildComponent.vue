<!-- src/components/GrandchildComponent.vue -->
<template>
    <div class="grandchild-component">
      <h3>孫コンポーネント</h3>
      <!-- App.vueから直接注入されたメッセージを表示 -->
      <p v-if="injectedMessage">App.vueから注入されたメッセージ: **{{ injectedMessage }}**</p>
      <p v-else>メッセージは注入されていません。</p>
  
      <button @click="changeInjectedMessage">注入されたメッセージを更新 (提供元に通知)</button>

      <p>現在のカウント: **{{ currentCount }}**</p>
      <button @click="incrementCount">親へカウントを渡す (カウントアップ)</button>
    </div>
  </template>
  
  <script setup>
  import { inject ,ref, defineEmits} from 'vue';

  const currentCount = ref(0);
// 親コンポーネントへイベントを発行するためのemitsを定義
// 'update-count' というカスタムイベントを定義します
  const emit = defineEmits(['increment-count']);
  // ボタンクリック時にカウントを増やし、イベントを発行する関数
  const incrementCount = () => {
    currentCount.value++;
    emit('increment-count', currentCount.value);
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