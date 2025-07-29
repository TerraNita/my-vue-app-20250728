<!-- src/components/ParentComponent.vue -->
<template>
    <div class="parent-component">
      <h2>親コンポーネント</h2>
      <p>孫から受け取ったカウント: **{{ receivedCountFromGrandchild }}**</p>
      <GrandchildComponent @increment="handleGrandchildCount" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import GrandchildComponent from './GrandchildComponent.vue';
  
  // 孫コンポーネントから受け取ったカウントを保持するリアクティブな変数
  const receivedCountFromGrandchild = ref(0);

  // GrandchildComponent から 'increment' イベントを受け取った時のハンドラ
  const handleGrandchildCount = (count) => {
    console.log('親コンポーネントで孫からのカウントを受信:', count);
    receivedCountFromGrandchild.value = count;
  };
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