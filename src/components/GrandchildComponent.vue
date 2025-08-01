<template>
  <div class="grandchild-component">
    <h3>孫コンポーネント</h3>
    <p>Piniaストアからのメッセージ: **{{ store.message }}**</p>

    <button @click="updateMessage">メッセージを更新</button>

    <h3>孫コンポーネント</h3>
    <p>現在のカウント: **{{ store.counter }}**</p>
    <p>ダブルカウント: **{{ store.doubleCount }}**</p>
    <button @click="handleIncrement">カウントアップ</button>
    <button @click="handleDecrement">カウントダウン</button>
  </div>
</template>

<script setup>
import { defineEmits, watch } from 'vue';
import { useStore } from '../store';

const store = useStore();

const emit = defineEmits(['increment']);

watch(() => store.counter, (newCount) => {
  emit('increment', newCount);
});

const handleIncrement = () => {
  store.increment();
};

// handleDecrementでdecrementアクションを呼び出すように修正
const handleDecrement = () => {
  store.decrement();
};

const updateMessage = () => {
    const newMessage = '孫からPiniaストアを更新！ (' + new Date().toLocaleTimeString() + ')';
    store.setMessage(newMessage);
};
</script>

<style scoped>
/* スタイルは変更なし */
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