<template>
  <div class="grandchild-component">
    <h3>孫コンポーネント</h3>
    <p>Piniaストアからのメッセージ: **{{ store.message }}**</p>

    <button @click="changeInjectedMessage">注入されたメッセージを更新 (提供元に通知)</button>

    <h3>孫コンポーネント</h3>
    <p>現在のカウント: **{{ store.counter }}**</p>
    <p>ダブルカウント: **{{ store.doubleCount }}**</p>
    <button @click="handleIncrement">親へカウントを渡す (カウントアップ)</button>
    <button @click="handleDecrement">カウントダウン</button>
  </div>
</template>

<script setup>
import { defineEmits, watch } from 'vue'; // defineEmitsとwatchをインポート
import { useStore } from '../store'; // Piniaストアをインポート

// Piniaストアを利用
const store = useStore();

// 親コンポーネントへイベントを発行するためのemitsを定義
const emit = defineEmits(['increment']);

// カウント値の変更をリアルタイムで親に通知
watch(() => store.counter, (newCount) => {
  emit('increment', newCount);
});

// カウントアップボタンのハンドラ
const handleIncrement = () => {
  store.increment();
};

// カウントダウンボタンのハンドラ
const handleDecrement = () => {
  store.counter--;
};

const changeInjectedMessage = () => {
    const newMessage = '孫からPiniaストアを更新！ (' + new Date().toLocaleTimeString() + ')';
    store.setMessage(newMessage);
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