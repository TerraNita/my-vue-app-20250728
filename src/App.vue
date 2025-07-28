<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Vue.js provide/inject サンプル</h1>
    <p>App.vueからのメッセージ: **{{ appMessage }}**</p>

    <ParentComponent />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import ParentComponent from './components/ParentComponent.vue';

const appMessage = ref('こんにちは、App.vueからのメッセージです！');

// provideを使って 'appMessageKey' というキーで appMessage を提供
// refオブジェクトをそのまま提供することで、孫コンポーネントで参照が維持され、
// App.vueのappMessageが更新されると、孫コンポーネントの表示も自動的に更新されます。
provide('appMessageKey', appMessage);

// 孫コンポーネントからメッセージを更新するための関数も提供
const updateAppMessage = (newMessage) => {
  appMessage.value = newMessage;
};
provide('updateAppMessageKey', updateAppMessage);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: #34495e;
}
</style>