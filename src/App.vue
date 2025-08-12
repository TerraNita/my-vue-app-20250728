<template>
  <!-- <div id="app">
    <h1>Vue.js Pinia サンプル</h1>
    <p>App.vueからのメッセージ: **{{ store.message }}**</p>
    <ParentComponent />
  </div> -->
  <nav>
      <router-link to="/">HomeView</router-link> |
      <router-link to="/aboutView">AboutView</router-link>
    </nav>
    <router-view/>
</template>

<script setup>
// import ParentComponent from './components/ParentComponent.vue';
// import { useStore } from './store'; // Piniaストアをインポート

// const store = useStore();
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