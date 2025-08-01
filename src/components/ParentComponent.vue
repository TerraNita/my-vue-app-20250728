<template>
  <div class="parent-component">
    <h2>親コンポーネント</h2>
    <p>孫のカウント: **{{ store.counter }}**</p>
    <GrandchildComponent />
  </div>
</template>

<script setup>
import GrandchildComponent from './GrandchildComponent.vue';
import { useStore } from '../store'; // Piniaストアをインポート

const store = useStore();
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