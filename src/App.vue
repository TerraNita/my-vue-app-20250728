<template>
  <div id="app">
    <h1>Vue.js 祖父母・親・孫コンポーネント連携</h1>
    <p>祖父母コンポーネントからのメッセージ: **{{ appMessage }}**</p>
    <p v-if="receivedMessageFromChild">親コンポーネントから受け取ったメッセージ: **{{ receivedMessageFromChild }}**</p>

    <ParentComponent
      :messageFromGrandparent="appMessage"
      @parent-event="handleParentEvent"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ParentComponent from './components/ParentComponent.vue';

const appMessage = ref('こんにちは、App.vueからのメッセージです！');
const receivedMessageFromChild = ref('');

// 親コンポーネントからのイベントを受け取った時のハンドラ
const handleParentEvent = (data) => {
  console.log('祖父母コンポーネントで親からのイベントを受信:', data);
  receivedMessageFromChild.value = data;
};
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