<!-- src/components/ParentComponent.vue -->
<template>
    <div class="parent-component">

      <p v-if="receivedCountFromGrandchild !== null">
      孫から受け取ったカウント: **{{ receivedCountFromGrandchild }}**
    </p>
    <p v-else>まだ孫からカウントは受け取っていません。</p>
    <GrandchildComponent @increment-count="handleGrandchildCount" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import GrandchildComponent from './GrandchildComponent.vue';
    // 孫コンポーネントから受け取ったカウントを保持するリアクティブな変数
    const receivedCountFromGrandchild = ref(null);

    // GrandchildComponent から 'update-count' イベントを受け取った時のハンドラ
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